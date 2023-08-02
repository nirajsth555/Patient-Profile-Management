import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginInputType } from "../../../utils/types/LoginInputType";

type LoginFormProps = {
    defaultValues?: LoginInputType;
    onSuccess: any,
    onError: any,
    validationMode?: 'onChange' | 'onBlur' | 'onSubmit' | 'onTouched' | 'all';
    revalidationMode?: 'onChange' | 'onBlur' | 'onSubmit';
}

const loginSchema = yup.object().shape({
    email: yup.string().email("Invalid email format").required("Email is required"),
    password: yup.string().required("Password is required"),
})

export function useLoginForm({
    defaultValues,
    onSuccess,
    onError,
    validationMode = "onSubmit",
    revalidationMode = "onBlur"
}: LoginFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        // reset
    } = useForm<LoginInputType>({
        defaultValues,
        resolver: yupResolver(loginSchema),
        mode: validationMode,
        reValidateMode: revalidationMode
    });

    const handleFormSubmit: SubmitHandler<LoginInputType> = async (data) => {
        try {
            console.log(data);
            console.log('will handle api call here')
            onSuccess();
        } catch (err) {
            onError(err);
        }
    }

    return {
        register,
        handleSubmit: handleSubmit(handleFormSubmit),
        formState: { errors }
    }
}