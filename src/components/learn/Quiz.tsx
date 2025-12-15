'use client'

import { useState } from 'react'
import { Quiz as QuizType, QuizQuestion } from '@/types'
import { CheckCircle, XCircle, ArrowRight, RotateCcw, Award } from 'lucide-react'

interface QuizProps {
  quiz: QuizType
  onComplete?: (score: number, passed: boolean) => void
}

export default function Quiz({ quiz, onComplete }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [answers, setAnswers] = useState<(number | null)[]>(
    new Array(quiz.questions.length).fill(null)
  )
  const [quizComplete, setQuizComplete] = useState(false)

  const question = quiz.questions[currentQuestion]
  const isCorrect = selectedAnswer === question.correct_answer
  const totalQuestions = quiz.questions.length

  const handleSelectAnswer = (index: number) => {
    if (showResult) return
    setSelectedAnswer(index)
  }

  const handleCheckAnswer = () => {
    if (selectedAnswer === null) return
    setShowResult(true)
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = selectedAnswer
    setAnswers(newAnswers)
  }

  const handleNextQuestion = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      // Quiz complete
      let correctCount = 0
      for (let i = 0; i < answers.length; i++) {
        // Use current answer for the last question
        const answerToCheck = i === currentQuestion ? selectedAnswer : answers[i]
        if (answerToCheck === quiz.questions[i].correct_answer) {
          correctCount++
        }
      }
      const score = Math.round((correctCount / totalQuestions) * 100)
      const passed = score >= quiz.passing_score
      setQuizComplete(true)
      onComplete?.(score, passed)
    }
  }

  const handleRetry = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setAnswers(new Array(quiz.questions.length).fill(null))
    setQuizComplete(false)
  }

  // Calculate final score
  const calculateScore = () => {
    let correctCount = 0
    for (let i = 0; i < answers.length; i++) {
      const answerToCheck = i === currentQuestion ? selectedAnswer : answers[i]
      if (answerToCheck === quiz.questions[i].correct_answer) {
        correctCount++
      }
    }
    return Math.round((correctCount / totalQuestions) * 100)
  }

  if (quizComplete) {
    const score = calculateScore()
    const passed = score >= quiz.passing_score

    return (
      <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
        <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 ${
          passed ? 'bg-green-100' : 'bg-amber-100'
        }`}>
          {passed ? (
            <Award className="w-10 h-10 text-green-600" />
          ) : (
            <RotateCcw className="w-10 h-10 text-amber-600" />
          )}
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {passed ? 'Congratulations!' : 'Keep Practicing!'}
        </h3>

        <p className="text-gray-600 mb-6">
          {passed
            ? 'You passed the quiz and can move on to the next lesson.'
            : `You need ${quiz.passing_score}% to pass. Review the material and try again.`}
        </p>

        <div className="text-5xl font-bold mb-2 text-gray-900">
          {score}%
        </div>
        <p className="text-gray-500 mb-8">
          {answers.filter((a, i) => a === quiz.questions[i].correct_answer).length} of {totalQuestions} correct
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={handleRetry}
            className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Retry Quiz
          </button>

          {passed && (
            <button className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors">
              Next Lesson
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      {/* Progress Bar */}
      <div className="bg-gray-100 h-2">
        <div
          className="bg-blue-600 h-2 transition-all duration-300"
          style={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
        />
      </div>

      <div className="p-6 md:p-8">
        {/* Question Counter */}
        <div className="text-sm text-gray-500 mb-4">
          Question {currentQuestion + 1} of {totalQuestions}
        </div>

        {/* Question */}
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          {question.question}
        </h3>

        {/* Options */}
        <div className="space-y-3 mb-6">
          {question.options.map((option, index) => {
            let optionStyle = 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'

            if (showResult) {
              if (index === question.correct_answer) {
                optionStyle = 'border-green-500 bg-green-50'
              } else if (index === selectedAnswer && index !== question.correct_answer) {
                optionStyle = 'border-red-500 bg-red-50'
              } else {
                optionStyle = 'border-gray-200 opacity-50'
              }
            } else if (selectedAnswer === index) {
              optionStyle = 'border-blue-500 bg-blue-50'
            }

            return (
              <button
                key={index}
                onClick={() => handleSelectAnswer(index)}
                disabled={showResult}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${optionStyle}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                    showResult && index === question.correct_answer
                      ? 'border-green-500 bg-green-500 text-white'
                      : showResult && index === selectedAnswer
                      ? 'border-red-500 bg-red-500 text-white'
                      : selectedAnswer === index
                      ? 'border-blue-500 bg-blue-500 text-white'
                      : 'border-gray-300'
                  }`}>
                    {showResult && index === question.correct_answer && (
                      <CheckCircle className="w-4 h-4" />
                    )}
                    {showResult && index === selectedAnswer && index !== question.correct_answer && (
                      <XCircle className="w-4 h-4" />
                    )}
                  </div>
                  <span className="text-gray-700">{option}</span>
                </div>
              </button>
            )
          })}
        </div>

        {/* Explanation (shown after answering) */}
        {showResult && (
          <div className={`p-4 rounded-lg mb-6 ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-amber-50 border border-amber-200'}`}>
            <div className="flex items-start gap-3">
              {isCorrect ? (
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              ) : (
                <XCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              )}
              <div>
                <p className={`font-medium ${isCorrect ? 'text-green-800' : 'text-amber-800'}`}>
                  {isCorrect ? 'Correct!' : 'Not quite right'}
                </p>
                <p className="text-gray-700 mt-1">
                  {question.explanation}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Action Button */}
        <div className="flex justify-end">
          {!showResult ? (
            <button
              onClick={handleCheckAnswer}
              disabled={selectedAnswer === null}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                selectedAnswer !== null
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              Check Answer
            </button>
          ) : (
            <button
              onClick={handleNextQuestion}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              {currentQuestion < totalQuestions - 1 ? 'Next Question' : 'See Results'}
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
