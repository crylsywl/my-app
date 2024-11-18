import AuthLayouts from "../Components/Layouts/AuthLayouts";
import FormLogin from "../Components/Fragments/FormLogin";

const LoginPage = () => {
    return (
        <div className="flex justify-center min-h-screen items-center gap-3">
            <AuthLayouts title="Selamat Datang" subheader="Silahkan Masuk untuk melanjutkan" > 
                <FormLogin /> 
            </AuthLayouts>
        </div>
    )
}

export default LoginPage