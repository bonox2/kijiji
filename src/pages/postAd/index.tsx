

export default function PostAdPage() {
  return (
    <>
    {/* -title   	 - input 
    -description - text area
    -price 	     - input 
    -address 	 - select blank 
    -category    - select 
    -subcategory - select
    -coverImg 	 - input type file 
    -images 	 - input type file multiple */}
    <div className="container mx-auto py-5">
        <h1 className="text-3xl font-bold text-[#373373]">Post Ad</h1>
        <form className="flex flex-col">
            <div className="flex flex-col">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="description">Description</label>
                <textarea name="description" id="description" cols={30} rows={10} className="max-h-28"></textarea>
            </div>
            <div className="flex flex-col">
                <label htmlFor="price">Price</label>
                <input type="number" name="price" id="price" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="address">Address</label>
                <select name="address" id="address">
                    <option value=""></option>
                </select>
            </div>
            <div className="flex flex-col">
                <label htmlFor="category">Category</label>
                <select name="category" id="category">
                    <option value=""></option>
                </select>
            </div>
            <div className="flex flex-col">
                <label htmlFor="subcategory">Subcategory</label>
                <select name="subcategory" id="subcategory">
                    <option value=""></option>
                </select>
            </div>
            <div className="flex flex-col">
                <label htmlFor="coverImg">Cover Image</label>
                <input type="file" name="coverImg" id="coverImg" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="images">Images</label>
                <input type="file" name="images" id="images" multiple />
            </div>
            <button type="submit" className="text-white  font-bold transition-colors ease-linear duration-200 px-8 py-3 rounded shadow-2xl mt-5  bg-[#373373] hover:bg-[#4a4675]">Post Ad</button>
        </form>
    </div>
    
        
    </>
  );
}