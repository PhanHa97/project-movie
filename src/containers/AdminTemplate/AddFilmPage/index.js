import React, { useState } from 'react';
import { useFormik } from 'formik';
import moment from 'moment';
import "../css/style.css"
import { fetchData } from './_component/action';
import {
    Form,
    Input,
    Radio,
    DatePicker,
    InputNumber,
    Switch,
} from 'antd';
import { useDispatch } from 'react-redux';


export const AddFilm = () => {
    const [componentSize, setComponentSize] = useState('default');
    const [imgSrc, setImgSrc] = useState("")
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            maPhim: 0,
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
                    const blob = new Blob([JSON.stringify(values.hinhAnh, null, 2)], { type: 'application/json' });
                    console.log(blob)
                    formData.append("File", blob, values.hinhAnh.name);
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
            <Form className="m-5 "
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
                <h4 className="btn btn-dark logout1">Th??m phim m???i</h4>
                <Form.Item label="Form Size" name="size">
                    <Radio.Group>
                        <Radio.Button value="small">Small</Radio.Button>
                        <Radio.Button value="default">Default</Radio.Button>
                        <Radio.Button value="large">Large</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Th??m phim">
                    <Input name="tenPhim" onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="Trailer">
                    <Input name="trailer" onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="M?? t???">
                    <Input name="moTa" onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="Ng??y kh???i chi???u">
                    <DatePicker format={"DD/MM/YYYY"} onChange={handleChangeDate} />
                </Form.Item>
                <Form.Item label="??ang chi???u"  >
                    <Switch onChange={handleSwitch("dangChieu")} />
                </Form.Item>
                <Form.Item label="S???p chi???u" >
                    <Switch onChange={handleSwitch("sapChieu")} />
                </Form.Item>
                <Form.Item label="Hot" >
                    <Switch onChange={handleSwitch("Hot")} />
                </Form.Item>
                <Form.Item label="S??? sao">
                    <InputNumber onChange={(value) => { formik.setFieldValue("danhGia", value) }} min={1} max={10} />
                </Form.Item>
                <Form.Item label="H??nh ???nh">
                    <input type="file" onChange={handleChangeFile} />
                    <img style={{ width: 200, height: 150 }} src={imgSrc} accept="image/png,image/gif,image/jpeg" />
                </Form.Item>
                <Form.Item label="T??c v???">
                    <button type="submit" className="btn btn-success">Th??m phim</button>
                </Form.Item>
            </Form>
        </div>
    );
};
