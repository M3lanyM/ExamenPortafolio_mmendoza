import React from "react"


export default function Perfil(props) {
    return (
        <>
            <article className="contain flex text">
                <div className=" column ">
                    <img
                        src={props.owner.avatar_url}
                        alt={props.owner.login}
                        className="imagen1"
                    />

                    <h2>{props.owner.login}</h2>

                    <p >{props.name}</p>
                    {props.private ? (
                        <p className="private">
                            Private
                        </p>
                    ) : (
                        <p className="public">
                            Public

                        </p>
                    )}

                    <a
                        className="url-repos"
                        href={props.html_url}
                    >
                        Ver repositorio
                        <br /></a>

                    {props.stargazers_count.toLocaleString()} stars <br />
                    {props.watchers_count.toLocaleString()} Watchers <br />

                    {props.language}

                    {props.topics &&
                        props.topics.map((topic, index) => (
                            <React.Fragment key={index}>
                                <li>
                                    {topic}
                                </li>
                            </React.Fragment>
                        ))}
                    <p>{props.open_issues} issues</p>
                </div>

            </article>
        </>
    )
}