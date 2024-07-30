interface IRocketSnippet {
    title: string;
    description: string;
}

export default function RocketSnippet({ title, description }: IRocketSnippet) {
    return (
        <article>
            <div>
                <FontAwesomeIcon icon={faRocket} />
            </div>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </article>
    );
}
