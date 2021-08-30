import api from "@/services/api";

export const getCandidatos = () => {
    return api.get('candidatos').then(res => res.data);
};