import axios from 'axios';



class ModelService {
    public getItems = async (): Promise<any> => {
        try {
            const { data } = await axios.get('http://dummy.restapiexample.com/api/v1/employees');
            return data;
        } catch(error) {
            return 'error';
        }
    }

}

const modelService = new ModelService();

export default modelService;