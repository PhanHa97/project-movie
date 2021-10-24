import React, { useState } from 'react';
import { useFormik } from 'formik';
import moment from 'moment';
import "../css/style.css"
import { fetchData } from './_component/action';
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
} from 'antd';
import { useDispatch } from 'react-redux';


export const AddFilm = () => {
    const [componentSize, setComponentSize] = useState('default');
    const [imgSrc, setImgSrc] = useState("")
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            tenPhim: "",
            trailer: "",
            moTa: "",
            ngayKhoiChieu: "",
            dangChieu: false,
            sapChieu: false,
            Hot: false,
            danhGia: 0,
            hinhAnh: {},
            maNhom: "GP01"
        },
        onSubmit: (values) => {
            console.log("value", values);
            let formData = new FormData;
            for (let key in values) {
                if (key !== "hinhAnh") {

                    formData.append(key, values[key]);
                } else {
                    formData.append("File", values.hinhAnh, values.hinhAnh.name);
                }
            }

            dispatch(fetchData(formData))
        }
    })
    const handleChangeDate = (value) => {
        formik.setFieldValue("ngayKhoiChieu", moment(value).format("DD/MM/YYYY"))
    }
    const handleSwitch = (name) => {

        return (value) => {
            formik.setFieldValue(name, value)
        }
    }
    const handleChangeFile = (e) => {
        let file = e.target.files[0]
        if (file.type === "image/jpeg" || file.type === "image/jpg" || file.type === "image/gif" || file.type === "image/png") {

            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                setImgSrc(e.target.result)
            }

        }

    }

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    return (
        <div className="bgAdd">
            <Form className="m-5  "
                onSubmitCapture={formik.handleSubmit}
                labelCol={{
                    span: 4,
                }}

                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                initialValues={{
                    size: componentSize,
                }}
                onValuesChange={onFormLayoutChange}
                size={componentSize}
            >
                <h4 className="btn btn-dark">Thêm phim mới</h4>
                <Form.Item label="Form Size" name="size">
                    <Radio.Group>
                        <Radio.Button value="small">Small</Radio.Button>
                        <Radio.Button value="default">Default</Radio.Button>
                        <Radio.Button value="large">Large</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Thêm phim">
                    <Input name="tenPhim" onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="Trailer">
                    <Input name="trailer" onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="Mô tả">
                    <Input name="moTa" onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="Ngày khởi chiếu">
                    <DatePicker format={"DD/MM/YYYY"} onChange={handleChangeDate} />
                </Form.Item>
                <Form.Item label="Đang chiếu"  >
                    <Switch onChange={handleSwitch("dangChieu")} />
                </Form.Item>
                <Form.Item label="Sắp chiếu" >
                    <Switch onChange={handleSwitch("sapChieu")} />
                </Form.Item>
                <Form.Item label="Hot" >
                    <Switch onChange={handleSwitch("Hot")} />
                </Form.Item>
                <Form.Item label="Số sao">
                    <InputNumber onChange={(value) => { formik.setFieldValue("danhGia", value) }} min={1} max={10} />
                </Form.Item>
                <Form.Item label="Hình ảnh">
                    <input type="file" onChange={handleChangeFile} />
                    <img style={{ width: 200, height: 150 }} src={imgSrc} accept="image/png,image/gif,image/jpeg" />
                </Form.Item>
                <Form.Item label="Tác vụ">
                    <button type="submit" className="btn btn-success">Thêm phim</button>
                </Form.Item>
            </Form>
        </div>
    );
};
