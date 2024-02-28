import { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";
const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
	const [isFormVisible, setIsFormVisible] = useState(false);
	const openForm = () => setIsFormVisible(true);
	const closeForm = () => setIsFormVisible(false);
	return (
		<FormContext.Provider value={{ isFormVisible, openForm, closeForm }}>
			{children}
		</FormContext.Provider>
	);
}