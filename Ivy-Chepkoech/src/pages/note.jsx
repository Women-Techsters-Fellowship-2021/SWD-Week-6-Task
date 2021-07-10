import React from 'react';
import { useParams } from 'react-router';
import Card from '../components/card';
import { data } from '../components/data';

function Note() {

    let { id } = useParams();

    // if (id === data.id)
    return (
        <div>
            {data.map(({ title, content }) => (
                <Card key={id} title={title} content={content} />
            ))}
        </div>
    );
}
// }

export default Note;
