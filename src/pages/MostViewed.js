import Feed from '../components/Feed'

export default function MostViewed() {
    const posts = [
        {
            id: Math.random(),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis doloribus quisquam, labore pariatur minima in aperiam, ipsa beatae non sequi vitae illo unde itaque sed accusamus libero, distinctio ad. Sequi at, maiores ad eveniet numquam accusantium magni fugit sint repudiandae iusto ipsa dignissimos veritatis eos in fugiat modi eligendi quibusdam.',
            userName: 'Matheus',
            publishedAdd: new Date(),
        },
        {
            id: Math.random(),
            content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam necessitatibus illo quam laudantium excepturi minima repellendus deserunt sed pariatur rerum? Animi perspiciatis aliquam earum laboriosam.',
            userName: 'Giovani',
            publishedAdd: new Date(),
        },
    ];

    return (
        <main className="most-viewed">
            <Feed
                posts={posts}
                title="Mais vistos"
                subtitle="Acompanhe os assuntos mais comentados no momento e fique por dentro de qualquer novidades"
            />
        </main>
    );
};