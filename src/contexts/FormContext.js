import { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        "name": "",
        "maxParticipants" : 1,
        "location": "",
        "description": "",
        "difficulty": "",
        "startTime": ""
    });

    const updateFormData = (newData) => {
        setFormData(prev => ({
            ...prev,
            ...newData
        }))
    }

    return (
        <FormContext.Provider value={{formData, updateFormData}}>
            {children}
        </FormContext.Provider>
    );
}

export const useForm = () => {
    return useContext(FormContext)
}