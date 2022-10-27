import { QuintaAulaItem } from '../../components/QuintaAulaItem'
import { fetchedData } from '../TerceiraAula/fetchedData'

export const QuintaAula = () => (
    <ul>
        {fetchedData.map(
            data => (
                <QuintaAulaItem key={data.id}
                    image={data.image}
                    title={data.title}
                    description={data.description}
                />
            )
        )}
    </ul>
)