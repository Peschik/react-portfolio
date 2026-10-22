type PagePlaceholderProps = {
  title: string
  description: string
}

export function PagePlaceholder({ title, description }: PagePlaceholderProps) {
  return (
    <section className="px-5 pt-8">
      <h1 className="text-2xl font-semibold tracking-tight text-text">
        {title}
      </h1>
      <p className="mt-2 text-base leading-relaxed text-muted">{description}</p>
    </section>
  )
}
