import axios from "axios";
import React, { useState } from "react";

function Address() {
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);

    useState(() => {
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

    // Lấy danh sách quận huyện
    const fetchDistricts = async (provinceCode) => {
        try {
            let res = await axios.get(
                `https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`
            );
            setDistricts(res.data.districts);
            setWards([]);
        } catch (error) {
            console.log(error);
        }
    };

    // Lấy danh sách xã phường
    const fetchWards = async (districtCode) => {
        try {
            let res = await axios.get(
                `https://provinces.open-api.vn/api/d/${districtCode}?depth=2`
            );
            setWards(res.data.wards);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h2>Danh sách tỉnh thành phố</h2>
            <select
                id="province"
                onChange={(e) => fetchDistricts(e.target.value)}
            >
                <option hidden>- Chọn tỉnh/thành phố</option>
                {provinces.map((province) => (
                    <option value={province.code} key={province.code}>
                        {province.name}
                    </option>
                ))}
            </select>
            <select id="district" onChange={(e) => fetchWards(e.target.value)}>
                <option hidden>- Chọn quận/huyện</option>
                {districts.map((district) => (
                    <option value={district.code} key={district.code}>
                        {district.name}
                    </option>
                ))}
            </select>
            <select id="ward">
                <option hidden>- Chọn xã/phường</option>
                {wards.map((ward) => (
                    <option value={ward.code} key={ward.code}>
                        {ward.name}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Address;
