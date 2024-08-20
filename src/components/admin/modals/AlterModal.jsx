import axios from '@/axios-folder/axios';
import useAxiosPrivate from '@/hooks/useAxiosPrivate';
import { elibraryRoute, reportsRoute } from '@/utils/Endpoint';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { IoClose } from 'react-icons/io5';

const AlterModal = ({ close, heading, tab, mode, id, getData }) => {

    const [title, setTitle] = useState('');
    const [coverImage, setCoverImage] = useState({});
    const [file, setFile] = useState({});

    const [singleData, setSingleData] = useState({})

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleCoverImageChange = (e) => {
        setCoverImage(e.target.files[0]);
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const axiosPrivate = useAxiosPrivate()
    const route = tab === 'e-library' ? elibraryRoute : tab === 'report' ? reportsRoute : ''

    const getSingleData = async () => {
        try {
            const response = await axios.get(`${route}/${id}`)

            if (response?.status === 200) {
                const fetchedData = response?.data
                setSingleData(fetchedData)
                setTitle(fetchedData?.title)
                setCoverImage(fetchedData?.coverImage)
                setFile(fetchedData?.file)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Title:', title);
        console.log('Cover Image:', coverImage);
        console.log('File:', file);

        const formdata = new FormData()
        formdata.append('title', title)
        formdata.append('coverImage', coverImage)
        formdata.append('file', file)

        try {
            let response;

            if (mode === 'create') {
                response = await axiosPrivate.post(route, formdata)
            }
            else if (mode === 'update') {
                response = await axiosPrivate.put(`${route}/${id}`, formdata)
            }

            if (response?.status === 201) {
                toast.success('Created')
                getData()
                close()
            }
            if (response?.status === 200) {
                toast.success('Updated')
                getData()
                close()
            }

        } catch (error) {
            console.log(error)
            toast.error('Attempt failed')
        }


    };

    useEffect(() => {
        if (mode === 'update' && id) {
            getSingleData()
        }
    }, [id])

    return (
        <div className=" h-[450px] w-[250px]  md:w-[600px] pt-3 px-2 ">
            <div>
                <h1 className="text-lg mb-5 text-secondary">{heading}</h1>
                <IoClose
                    onClick={close}
                    size={23}
                    className="absolute top-2 right-2 text-[#475467] cursor-pointer"
                />
                <form onSubmit={handleSubmit}  >
                    <div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputTitle" className="block text-md font-medium pb-0 text-customBlack-700">Title</label>
                            <input
                                type="text"
                                className="form-input block w-full h-10 rounded-md border pl-3"
                                placeholder="" id="exampleInputTitle"
                                aria-describedby="titleHelp"
                                value={title}
                                onChange={handleTitleChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputcoverimage" className="block text-md font-medium text-customBlack-700">Cover image</label>
                            <input type="text"
                                value={coverImage?.name ? coverImage?.name : singleData?.coverImageFileName}
                                readOnly
                                className="form-input block w-full h-10 rounded-md border pl-3" placeholder="" id="exampleInputcoverimage" />

                            <input
                                type="file"
                                onChange={handleCoverImageChange}
                                className="hidden"
                                id="coverImageUpload"
                            />

                            <label type="button" htmlFor="coverImageUpload" className="mt-2 px-4 py-2 rounded-md shadow-lg cursor-pointer">browse</label>
                            <button type="button" className="mt-2 ml-2 px-4 py-2 shadow-lg rounded-md">view</button>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputFile" className="block text-md font-medium text-customBlack-700">File</label>

                            <input type="text"
                                value={file?.name ? file?.name : singleData?.fileName}
                                readOnly
                                className="form-input h-10 block w-full rounded-md border pl-3" placeholder="" id="exampleInputFile" />


                            <input
                                type="file"
                                onChange={handleFileChange}
                                className="hidden"
                                id="fileUpload"
                            />

                            <label type="button" htmlFor="fileUpload" className="mt-2 px-4 py-2 rounded-md shadow-lg cursor-pointer">browse</label>

                            <button type="button" className="mt-2 ml-2 px-4 py-2 rounded-md shadow-lg">view</button>
                        </div>
                        <button type="submit" className="mt-4 block w-full h-14 px-4 py-2 bg-customRed text-white rounded-md">Upload</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default AlterModal