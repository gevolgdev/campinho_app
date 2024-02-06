import { create } from 'zustand'

type State = {
	isLogin: boolean
}

type Action = {
	setIsLogin: (State: State['isLogin']) => void
}

export const useLogin = create<State & Action>((set) => ({
	isLogin: true,
	setIsLogin: (state) =>
		set(() => ({
			isLogin: state,
		})),
}))
