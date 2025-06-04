import { useState } from "react";
import { users } from "../components/data/users-constants";
import { useNavigate } from "react-router-dom";
import { login } from "../utils/storage";

function Login () {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');
    // manibular o login

    const navigate = useNavigate();
    function handleLogin() {
        const userFound = users.find(user => user.email === email);
        console.log(userFound);
        // null
        // userFound
        // 0

        if (userFound){
            const match = senha === userFound.senha
            if(match){
                // usuario autenticado
                login(JSON.stringify, userFound);
                navigate('/painel');
                return;
            }
            // senha invalida
            setError('Senha invalida')
            return;
        }
        // usuario não encontrado
        setError('Usuario não encontrado')
        return;
    }

    return(
        <div className="flex-grow flex shadow m-6 rounded-[12px]  bg-slate-200 justify-center items-center">
            <div className=" p-6 flex flex-col min-w-[398px] gap-3">
                <h3 className="text-center">Faça Login na sua conta</h3>
                <div className="field flex flex-col w-[100%] ">
                    <span>E-mail</span>
                    <input className="rounded-[8px] min-h-[40px] p-2" placeholder="Informe seu e-mail" type="email" name="email" value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>
                <div className="field flex flex-col w-[100%] ">
                    <span>Senha</span>
                    <input className="rounded-[8px] min-h-[40px] p-2" placeholder="Senha" type="password" name="senha" value={senha} 
                    onChange={(e) => setSenha(e.target.value)} 
                    />
                </div>
                <span>Esqueceu a senha</span>
                <button onClick={handleLogin} 
                className="text-white hover:bg-color-third bg-color-primary uppercase front-bold rounded-[8px] min-h-[40px] p-2">Entrar</button>
                <span className="text-red-error">{error}</span>
                
            </div>

        </div>
    )
}

export default Login;