import { useState } from 'react'
import './App.css'

type CaseStatus = 'Todo' | 'Passed'
type TestCase = { id: string; title: string; kind: string; status: CaseStatus }
const initialCases: TestCase[] = [
  { id: 'TC-01', title: 'Accepts a valid email', kind: 'Positive', status: 'Todo' },
  { id: 'TC-02', title: 'Rejects an empty email', kind: 'Negative', status: 'Todo' },
  { id: 'TC-03', title: 'Shows a useful error message', kind: 'UX', status: 'Todo' },
  { id: 'TC-04', title: 'Rejects a password shorter than 8 characters', kind: 'Negative', status: 'Todo' },
  { id: 'TC-05', title: 'Rejects an empty password', kind: 'Negative', status: 'Todo' },
]

function App() {
  const [cases, setCases] = useState(initialCases)
  const markPassed = (id: string) => setCases((current) => current.map((testCase) => testCase.id === id ? { ...testCase, status: 'Passed' } : testCase))
  const passed = cases.filter((testCase) => testCase.status === 'Passed').length

  return <main className="page">
    <section className="hero"><span className="eyebrow">QA Playground</span><h1>Small tests.<br /><span>Clear bugs.</span></h1><p>A tiny public project for practicing test cases, bug reports and helpful pull requests.</p><div className="progress"><span style={{ width: `${(passed / cases.length) * 100}%` }} /></div><div className="progress-label"><span>{passed} of {cases.length} checks passed</span><strong>{Math.round((passed / cases.length) * 100)}%</strong></div></section>
    <section className="panel" aria-labelledby="cases-title"><div className="panel-heading"><div><span className="section-number">01</span><h2 id="cases-title">Test cases</h2></div><span className="open-label">Open for contributions</span></div><div className="case-list">{cases.map((testCase) => <article className={`case ${testCase.status.toLowerCase()}`} key={testCase.id}><div className="case-id">{testCase.id}</div><div className="case-copy"><strong>{testCase.title}</strong><small>{testCase.kind} test</small></div><button className="case-action" onClick={() => markPassed(testCase.id)} disabled={testCase.status === 'Passed'}>{testCase.status === 'Passed' ? 'Passed' : 'Mark passed'}</button></article>)}</div></section>
    <section className="contribute"><span className="section-number">02</span><div><h2>Good first contributions</h2><p>Add a test case, improve the wording, or report a bug. Every change should explain what behavior it protects.</p></div><a href="https://github.com/mauriciofeoli/ia-teste/issues" target="_blank" rel="noreferrer">View issues <span>↗</span></a></section>
    <footer><span>QA Playground · MIT</span><span>Built for thoughtful testing</span></footer>
  </main>
}

export default App
