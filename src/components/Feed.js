import '../styles/Feed.css';

import userIcon from '../images/user.svg';
import clockIcon from '../images/clock.svg';
import emptyFolder from '../images/empty-folder.svg';

export default function Feed(props) {
    if (props.posts.length === 0) {
        return (
            <div className='feed-status'>
                <img src={emptyFolder} alt='Empty folder' />

                <h1>Não encontramos nada</h1>
                <h2>
                    Parece que você e seus amigos não postaram nada, Comece a escrever uma nova história!
                </h2>
            </div>
        );

    } else {
        return (
            <>
                <header>
                    <h1>{ props.title }</h1>
                    <h2>{ props.subtitle }</h2>
                </header>

                <section className='feed'>
                    {props.posts.map((post) => (
                        <article key={post.id}>
                            <p>{post.content}</p>

                            <footer>
                                <div className='user-details'>
                                    <img src={userIcon} alt="User" />
                                    <strong>{post.userName}</strong>
                                </div>

                                <div className='time'>
                                    <img src={clockIcon} alt='clock' />
                                    <span>
                                        Publicado em {post.publishedAdd.toLocaleDateString('pt-br')}
                                    </span>
                                </div>
                            </footer>
                        </article>
                    ))}
                </section>
            </>
        );
    };
}