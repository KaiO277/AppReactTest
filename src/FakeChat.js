

const comments = [
    {
        id: 1,
        usename: "KaiO",
        comment: "This is a comment",
    },
    {
        id: 2,
        usename: "KaI",
        comment: "This is a KaiO comment",
    },
    {
        id: 3,
        usename: "Ka",
        comment: "This is a Ka comment",
    }
]

function FakeChat(){


    return (
        <div>
            {
                comments.map(comment => (
                    <div key={comment.id}>
                        <h2>{comment.usename}</h2>
                    </div>
                ))
            }
        </div>
    )
}

export default FakeChat;