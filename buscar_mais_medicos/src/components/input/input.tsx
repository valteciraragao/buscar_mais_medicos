import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react";
import S from './input.style'

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    label: string
    name: string
    id: string
    icon?: ReactNode
    onIcon?: () => void
}

const Input = ({ label, id, name, icon, onIcon, ...props }: Props) => {
    const classis = [
        props.value ? 'active' : ''
    ]

    return(
        <S.Div className={classis.join('')}>
            <S.Input {...props} id={id} name={name} />
            <S.Label htmlFor={id}>{label}</S.Label>
            {icon && (
                <S.Icon onClick={onIcon}>{icon}</S.Icon>
            )}
        </S.Div>
    )
}
export default Input