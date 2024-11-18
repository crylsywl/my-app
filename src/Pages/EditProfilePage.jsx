import Navbar from "../Components/Elements/Navbar/Navbar";
import FormProfile from "../Components/Fragments/FormProfile";
import ProfileLayout from "../Components/Layouts/ProfileLayouts";


const EditProfilePage = () => {
    return (
        <div>
            <Navbar />
            <ProfileLayout
                classnameOfRiwayat="border-[#121212] border-2 text-black hover:border-[#FB6816] hover:text-[#FB6816]"
                classnameOfEdit="bg-[#FB6816] text-[#fffff0] hover:bg-[#FDAC7F]"
            />
            <div className="mt-[22px] ml-[443px] mr-[150px]">
            <FormProfile></FormProfile>
            </div>
        </div>
    );
};

export default EditProfilePage;