import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

function AddItem() {
    const [quantity, setQuantity] = useState(1);
    const incrementQuantity = () => setQuantity(quantity + 1);
    let decrementQuantity = () => setQuantity(quantity - 1);
    if (quantity <= 0) {
        decrementQuantity = () => setQuantity(1);
    }
    const onDrop = useCallback((acceptedFiles: Array<File>) => {
        const file = new FileReader();

        file.onload = function () {
            setPreview(file.result);
        }

        file.readAsDataURL(acceptedFiles[0])
    }, [])

    const { acceptedFiles, getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop
    });

    const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);

    /**
     * handleOnSubmit
     */

    // async function handleOnSubmit(e: React.SyntheticEvent) {
    //     e.preventDefault();

    //     if (typeof acceptedFiles[0] === 'undefined') return;

    //     const formData = new FormData();

    //     formData.append('file', acceptedFiles[0]);
    //     formData.append('upload_preset', '<Your Upload Preset>');
    //     formData.append('api_key', import.meta.env.VITE_CLOUDINARY_API_KEY);

    //     const results = await fetch('https://api.cloudinary.com/v1_1/<Your Cloud Name>/image/upload', {
    //         method: 'POST',
    //         body: formData
    //     }).then(r => r.json());

    //     console.log('results', results);
    // }

    return (
        <div className="container-fluid">
            <h1 className="text-6xl font-black text-center text-slate-900 mb-20">
                Add an Item to List
            </h1>

            {/* <form className="max-w-md border border-gray-200 rounded p-6 mx-auto" onSubmit={handleOnSubmit}> */}
            <form className="container-fluid">

                <div className="mb-5">
                    <label htmlFor="image">Image</label>
                    <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        {
                            isDragActive ?
                                <p>Drop files here</p> :
                                <>
                                    <p>Drag and drop an image here, or click to</p>
                                    <button>select files</button>
                                </>
                        }
                    </div>
                </div>

                {preview && (
                    <p className="mb-5">
                        <img src={preview as string} alt="Upload preview" width={300} />
                    </p>
                )}


                <p>Add your link from any store (optional): </p>
                <input></input>
                <br />
                <br />
                <p>Product title: </p>
                <input></input>
                <br />
                <br />
                <p>Select category: </p>
                <select name="selectedCategory">
                    <option value="fashion">Fashion & Apparel</option>
                    <option value="electronics">Electronics</option>
                    <option value="food">Food</option>
                    <option value="health">Health & Beauty</option>
                    <option value="books">Books & Media</option>
                    <option value="toys">Toys & Games</option>
                    <option value="other">Other</option>
                </select>
                <br />
                <br />
                <p>Note for family & friends:</p>
                <input placeholder='Size, Color, etc.'></input>
                <br />
                <br />
                <button>Save Item</button>
                <br />
                <br />
                <span>Quantity</span>
                <br />
                <button onClick={decrementQuantity}> - </button>
                &nbsp;
                {quantity}
                &nbsp;
                <button onClick={incrementQuantity}> + </button>
                <br />
                <br />
                <button>Save</button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button>Cancel</button>
            </form>
        </div>
    )
}

export default AddItem;