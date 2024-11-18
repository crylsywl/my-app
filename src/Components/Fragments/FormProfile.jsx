import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button/Index";
import { Link } from "react-router-dom";
const FormProfile = () => {
    return (
        <section className="my-[20px]">
            <InputForm 
              title="Nama Lengkap"         
              name="Nama Lengkap"         
              placeholder="Kevin Susanto"                    
              type="string"
              classname2="placeholder:text-black"
            />
            <div className="flex flex-row justify-between gap-4">
            <InputForm 
              title="Tanggal Lahir" 
              name="tanggal lahir" 
              placeholder="12/12/2000" 
              type="date"
              classname="w-1/2"
              classname2="placeholder:text-black"
            />
            <InputForm 
              title="Jenis Kelamin" 
              name="Gender" 
              placeholder="Laki-Laki" 
              type="string"
              classname="w-1/2"
              classname2="placeholder:text-black"
            />
            </div>
            <div className="flex flex-row justify-between gap-4">
            <InputForm 
              title="Nomor Telepon" 
              name="Nomor Telepon" 
              placeholder="08123456789" 
              type="number"
              classname="w-1/2"
              classname2="placeholder:text-black"
            />
            <InputForm 
              title="Domisili" 
              name="domisili" 
              placeholder="Jakarta" 
              type="string"
              classname="w-1/2"
              classname2="placeholder:text-black"
            />
            </div>
            <div className="flex justify-center">
            <Button classname="bg-[#FB6816] text-[#fffff0] hover:bg-[#FDAC7F] mb-4">Simpan Perubahan</Button>
            </div>
            <InputForm 
              title="Email"         
              name="email"         
              placeholder="kevinsusanto@gmail.com"                    
              type="email"
              classname2="placeholder:text-black"
            />
            <div className="flex flex-row justify-between items-end gap-4">
              <InputForm 
                title="Password"         
                name="password"         
                placeholder="*********"                    
                type="password"
                classname="w-full"
                classname2="placeholder:text-black"
              />
              <Button classname="bg-[#FB6816] text-[#fffff0] hover:bg-[#FDAC7F] w-[250px] mb-6">Ubah Password</Button>
            </div>
            <div className="flex flex-row justify-center gap-8">
            <Link to={"/"} className="btn-link border-b-2 border-black hover:border-blue-600 hover:text-blue-600 cursor-pointer">
              Kebijakan Privasi
            </Link>
            <Link to={"/"} className="btn-link border-b-2 border-black hover:border-blue-600 hover:text-blue-600 cursor-pointer">
              Syarat dan Ketentuan
            </Link>            <Link to={"/"} className="btn-link border-b-2 border-black hover:border-blue-600 hover:text-blue-600 cursor-pointer">
              Pusat Bantuan
            </Link>
            </div>
            <div className="flex flex-row gap-4 mt-4 justify-center">
                <Button classname="bg-[#FB6816] text-[#fffff0] hover:bg-[#FDAC7F] ">Keluar Akun</Button>
                <Button classname="bg-[#FB6816] text-[#fffff0] hover:bg-[#FDAC7F] ">Hapus Akun</Button>
            </div>
        </section>
    )
}

export default FormProfile