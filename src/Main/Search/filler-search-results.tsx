import { useEffect, useState } from "react";

export default function FillerSearchResults()
{
  const [text, setText] = useState("")
  const [error, setError] = useState<Error | null>(null)
  const [users, setUsers] = useState<any[]>([])

  useEffect(() => {
    (async () => {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => setUsers(users))
      .catch(err => setError(err))
    })()
  }, [])


  return {
    text,
    setText,
    users,
    error,
  }
}