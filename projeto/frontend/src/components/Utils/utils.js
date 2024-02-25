import React, { useContext } from 'react'

export const PathsContext = React.createContext({})

export function usePaths () {
    return useContext(PathsContext)
}
