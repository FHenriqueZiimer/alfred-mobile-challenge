import { useEffect, useReducer, useCallback } from 'react';

interface FetchState<T> {
  error: string | null;
  data: T | null;
  isLoading: boolean;
}

type FetchAction<T> =
  | { type: 'loading' }
  | { type: 'fetched'; payload: T }
  | { type: 'error'; payload: string };

function fetchReducer<T>(state: FetchState<T>, action: FetchAction<T>): FetchState<T> {
  switch (action.type) {
    case 'loading':
      return { ...state, isLoading: true };
    case 'fetched':
      return { ...state, data: action.payload, isLoading: false };
    case 'error':
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
}

export function useFetch<T>(url: string) {
  const initialState: FetchState<T> = {
    error: null,
    data: null,
    isLoading: true,
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  const handleFetch = useCallback(async () => {
    dispatch({ type: 'loading' });

    try {
      const response = await fetch(url).then((res) => res.json());
      dispatch({ type: 'fetched', payload: response.results });
    } catch (error: any) {
      console.error('Error fetching data:', error);
      dispatch({ type: 'error', payload: error.message });
    }
  }, [url]);

  useEffect(() => {
    handleFetch();
  }, [handleFetch]);

  return {
    result: state.data as T,
    error: state.error,
    isLoading: state.isLoading,
  };
}