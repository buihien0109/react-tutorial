import { useEffect, useState } from "react";
import axios from "axios";


const useProvince = () => {
    const [provinces, setProvinces] = useState([]);

    // Lấy danh sách tỉnh thành phố
    useEffect(() => {
        const fetchProvinces = async () => {
            try {
                let res = await axios.get(
                    "https://provinces.open-api.vn/api/p/"
                );
                setProvinces(res.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchProvinces();
    }, []);

    return { provinces }
}

export default useProvince;