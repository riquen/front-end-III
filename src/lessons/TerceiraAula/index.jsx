import { fetchedData } from './fetchedData'

export const TerceiraAula = () => (
    <ul>
        {fetchedData.map(
            data => (
                <li key={data.id}>
                    <img src={data.image} />
                    <h1>{data.title}</h1>
                    <p>{data.description}</p>
                </li>
            )
        )}
    </ul>
)