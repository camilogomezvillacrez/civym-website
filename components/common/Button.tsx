import React from 'react'

type Props = React.ComponentProps<'button'> & { variant?: 'primary' | 'ghost' }

export default function Button({ variant = 'primary', className = '', children, ...rest }: Props) {
  const base = 'px-4 py-2 rounded-md text-sm font-medium'
  const style =
    variant === 'primary'
      ? 'bg-[var(--civym-yellow)] text-black'
      : 'bg-transparent text-[var(--civym-gray)]'
  return (
    <button className={`${base} ${style} ${className}`} {...rest}>
      {children}
    </button>
  )
}
