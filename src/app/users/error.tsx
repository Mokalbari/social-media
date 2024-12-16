"use client"

import { useEffect } from "react"

/* 
le composant erreur est un composant client spécial qui prend deux props :
un erreur de type Error, et un reset qui est une fonction qui permet de re-trigger la page
*/

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    console.log(error)
  }, [error])

  return (
    <div>
      <h2>Oops! Something went wrong</h2>
      <button onClick={() => reset()}>Try again !</button>
    </div>
  )
}
