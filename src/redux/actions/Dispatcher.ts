export type Dispatcher = (
  dispatch: (action: { type: string; payload?: any }) => void
) => void
