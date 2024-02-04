import React, { useState } from 'react'
import {
	Container,
	Content,
	EnterLogin,
	EnterLoginLabel,
	ForgotLabel,
	GoRegister,
	RegisterLabel,
	SubTitle,
	Title,
} from './style'
import { IPageProps } from './types'
import { AppWrapper } from '../../components/AppWrapper'
import Logo from '../../../assets/icons/Logo.svg'
import { InputText } from '../../components/InputText'
import EmailIcon from '../../../assets/icons/EmailIcon.svg'
import PassIcon from '../../../assets/icons/PassIcon.svg'

function LoginView({ navigation, setIsLogin }: IPageProps) {
	const [textInput, setTextInput] = useState('')
	const [passInput, setPassInput] = useState('')

	return (
		<AppWrapper navigation={navigation}>
			<Container>
				<Logo />

				<Content>
					<Title>Bem-vindo(a)</Title>
					<SubTitle>de volta!</SubTitle>
					<InputText
						label='Email'
						placeholderLabel='Digite seu email...'
						text={textInput}
						setText={setTextInput}
						Icon={() => <EmailIcon />}
					/>

					<InputText
						label='Senha'
						placeholderLabel='Digite sua senha...'
						text={passInput}
						setText={setPassInput}
						Icon={() => <PassIcon />}
					/>
					<EnterLogin onPress={() => setIsLogin(true)}>
						<EnterLoginLabel>Entrar</EnterLoginLabel>
					</EnterLogin>

					<ForgotLabel>Esqueci minha senha</ForgotLabel>
				</Content>

				<RegisterLabel>
					Ainda não possui uma conta? <GoRegister>Registre-se</GoRegister>
				</RegisterLabel>
			</Container>
		</AppWrapper>
	)
}

export { LoginView }
