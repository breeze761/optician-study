'use client'

import { useState, useEffect } from 'react'
import { CalculationProblem, CalculationCategory, CalculationType } from '@/types'
import { calculationCategories, getRandomProblems, getProblemsByType } from '@/data/calculations'
import {
  CheckCircle,
  XCircle,
  ArrowRight,
  RotateCcw,
  Lightbulb,
  Calculator,
  ChevronDown,
  ChevronUp,
  Award
} from 'lucide-react'

interface CalculationPracticeProps {
  categoryId?: CalculationType
  problemCount?: number
}

export default function CalculationPractice({
  categoryId,
  problemCount = 5
}: CalculationPracticeProps) {
  const [problems, setProblems] = useState<CalculationProblem[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [userAnswer, setUserAnswer] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [showSteps, setShowSteps] = useState(false)
  const [score, setScore] = useState(0)
  const [completed, setCompleted] = useState(false)
  const [answers, setAnswers] = useState<{ correct: boolean; userAnswer: string }[]>([])

  useEffect(() => {
    loadProblems()
  }, [categoryId, problemCount])

  const loadProblems = () => {
    const newProblems = categoryId
      ? getRandomProblems(problemCount, categoryId)
      : getRandomProblems(problemCount)
    setProblems(newProblems)
    setCurrentIndex(0)
    setUserAnswer('')
    setShowResult(false)
    setShowHint(false)
    setShowSteps(false)
    setScore(0)
    setCompleted(false)
    setAnswers([])
  }

  const currentProblem = problems[currentIndex]

  const checkAnswer = () => {
    if (!currentProblem || userAnswer.trim() === '') return

    const userInput = userAnswer.trim().toLowerCase()
    let isCorrect = false

    // Handle numeric answers
    if (typeof currentProblem.answer === 'number') {
      const userNum = parseFloat(userInput.replace(/[^\d.-]/g, ''))
      const tolerance = currentProblem.tolerance || 0.01
      isCorrect = Math.abs(userNum - currentProblem.answer) <= tolerance
    } else {
      // String comparison (for transposition, etc.)
      const correctAnswer = currentProblem.answer.toLowerCase().replace(/\s+/g, '')
      const cleanUserInput = userInput.replace(/\s+/g, '')
      isCorrect = cleanUserInput.includes(correctAnswer) || correctAnswer.includes(cleanUserInput)
    }

    if (isCorrect) {
      setScore(prev => prev + 1)
    }

    setAnswers(prev => [...prev, { correct: isCorrect, userAnswer }])
    setShowResult(true)
  }

  const nextProblem = () => {
    if (currentIndex < problems.length - 1) {
      setCurrentIndex(prev => prev + 1)
      setUserAnswer('')
      setShowResult(false)
      setShowHint(false)
      setShowSteps(false)
    } else {
      setCompleted(true)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !showResult) {
      checkAnswer()
    } else if (e.key === 'Enter' && showResult) {
      nextProblem()
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-700'
      case 'medium': return 'bg-yellow-100 text-yellow-700'
      case 'hard': return 'bg-red-100 text-red-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  if (problems.length === 0) {
    return (
      <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
        <Calculator className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-600">Loading problems...</p>
      </div>
    )
  }

  if (completed) {
    const percentage = Math.round((score / problems.length) * 100)
    const passed = percentage >= 70

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
          {passed ? 'Great Work!' : 'Keep Practicing!'}
        </h3>

        <p className="text-gray-600 mb-6">
          {passed
            ? 'You\'re mastering these calculations!'
            : 'Review the formulas and try again.'}
        </p>

        <div className="text-5xl font-bold mb-2 text-gray-900">
          {percentage}%
        </div>
        <p className="text-gray-500 mb-8">
          {score} of {problems.length} correct
        </p>

        {/* Review answers */}
        <div className="text-left mb-8 max-h-64 overflow-y-auto">
          <h4 className="font-semibold text-gray-700 mb-3">Review:</h4>
          {problems.map((problem, idx) => (
            <div key={problem.id} className={`p-3 rounded-lg mb-2 ${
              answers[idx]?.correct ? 'bg-green-50' : 'bg-red-50'
            }`}>
              <div className="flex items-start gap-2">
                {answers[idx]?.correct ? (
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                )}
                <div className="text-sm">
                  <p className="font-medium text-gray-700">Q{idx + 1}: {problem.question.substring(0, 60)}...</p>
                  <p className="text-gray-600">Your answer: {answers[idx]?.userAnswer || 'N/A'}</p>
                  <p className="text-gray-600">Correct: {String(problem.answer)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={loadProblems}
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors mx-auto"
        >
          <RotateCcw className="w-4 h-4" />
          Practice Again
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      {/* Progress Bar */}
      <div className="bg-gray-100 h-2">
        <div
          className="bg-blue-600 h-2 transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / problems.length) * 100}%` }}
        />
      </div>

      <div className="p-6 md:p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-gray-500">
            Problem {currentIndex + 1} of {problems.length}
          </span>
          <span className={`text-xs px-2 py-1 rounded-full font-medium ${getDifficultyColor(currentProblem.difficulty)}`}>
            {currentProblem.difficulty.charAt(0).toUpperCase() + currentProblem.difficulty.slice(1)}
          </span>
        </div>

        {/* Question */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 whitespace-pre-line">
            {currentProblem.question}
          </h3>

          {/* Formula hint button */}
          {currentProblem.formula && (
            <button
              onClick={() => setShowHint(!showHint)}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm mb-4"
            >
              <Lightbulb className="w-4 h-4" />
              {showHint ? 'Hide Formula' : 'Show Formula Hint'}
            </button>
          )}

          {/* Formula display */}
          {showHint && currentProblem.formula && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <p className="text-sm font-mono text-blue-800 whitespace-pre-line">
                {currentProblem.formula}
              </p>
            </div>
          )}
        </div>

        {/* Answer Input */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Your Answer {currentProblem.answerUnit && `(${currentProblem.answerUnit})`}
          </label>
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={showResult}
            placeholder="Enter your answer..."
            className={`w-full px-4 py-3 border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              showResult
                ? answers[currentIndex]?.correct
                  ? 'border-green-500 bg-green-50'
                  : 'border-red-500 bg-red-50'
                : 'border-gray-300'
            }`}
          />
        </div>

        {/* Result Display */}
        {showResult && (
          <div className={`p-4 rounded-lg mb-6 ${
            answers[currentIndex]?.correct
              ? 'bg-green-50 border border-green-200'
              : 'bg-red-50 border border-red-200'
          }`}>
            <div className="flex items-start gap-3">
              {answers[currentIndex]?.correct ? (
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              ) : (
                <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              )}
              <div>
                <p className={`font-medium ${
                  answers[currentIndex]?.correct ? 'text-green-800' : 'text-red-800'
                }`}>
                  {answers[currentIndex]?.correct ? 'Correct!' : 'Not quite right'}
                </p>
                <p className="text-gray-700 mt-1">
                  <strong>Correct Answer:</strong> {String(currentProblem.answer)} {currentProblem.answerUnit || ''}
                </p>
                <p className="text-gray-600 mt-2 text-sm">
                  {currentProblem.explanation}
                </p>
              </div>
            </div>

            {/* Step-by-step solution */}
            {currentProblem.steps && (
              <div className="mt-4">
                <button
                  onClick={() => setShowSteps(!showSteps)}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-800 text-sm font-medium"
                >
                  {showSteps ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  {showSteps ? 'Hide Steps' : 'Show Step-by-Step Solution'}
                </button>

                {showSteps && (
                  <div className="mt-3 pl-4 border-l-2 border-gray-300">
                    {currentProblem.steps.map((step, idx) => (
                      <p key={idx} className="text-sm text-gray-700 py-1">
                        <span className="font-medium text-blue-600">Step {idx + 1}:</span> {step}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex justify-end gap-3">
          {!showResult ? (
            <button
              onClick={checkAnswer}
              disabled={userAnswer.trim() === ''}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                userAnswer.trim() !== ''
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              <Calculator className="w-4 h-4" />
              Check Answer
            </button>
          ) : (
            <button
              onClick={nextProblem}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              {currentIndex < problems.length - 1 ? 'Next Problem' : 'See Results'}
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
