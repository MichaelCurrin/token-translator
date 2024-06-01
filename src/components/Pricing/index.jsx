import { PRICE_PER_MILLION_TOKENS } from '../../constants';
import Table from './Table';

function Pricing() {
    return (
        <div>
            <p>Prices for using the model through an API, as price per 1 million tokens (as given by the sources)</p>
            <Table models={PRICE_PER_MILLION_TOKENS} />
        </div>
    );
}

export default Pricing;
