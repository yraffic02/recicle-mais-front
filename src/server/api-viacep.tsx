import axios from 'axios';

async function viaCep(cep: string) {
    const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

    return {
        cep,
        endereco: data.logradouro,
        municipio: data.localidade,
        estado: data.uf,
    };
}

export default viaCep;