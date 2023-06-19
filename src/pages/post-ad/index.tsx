import { useMutation } from '@apollo/client';
import { CREATE_AD_M } from '../../graphql/mutations/CREATE_AD_M';

export default function PostAdPage() {
  const [createAdMutation, { data, loading, error }] = useMutation(CREATE_AD_M);

  const createAd = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;

    createAdMutation({
      variables: {
        title,
        categoryId: 'clgju2h9l0002t1akfai58xxo'
      }
    });
  };

  return (
    <>
      <div className="container mx-auto max-w-[1140px] py-5 px-4">
        <h1 className="text-3xl font-bold text-[#373373] text-center">
          Post Ad
        </h1>
        <form
          className="flex flex-col mx-auto max-w-[600px]"
          onSubmit={createAd}>
          <div className="flex flex-col">
            <label className="label_header" htmlFor="title">
              Title
            </label>
            <input
              className="input_outline"
              type="text"
              name="title"
              id="title"
            />
          </div>
          <div className="flex flex-col">
            <label className="label_header" htmlFor="description">
              Description
            </label>
            <textarea
              className="input_outline max-h-28"
              name="description"
              id="description"
              cols={30}
              rows={10}></textarea>
          </div>
          <div className="flex flex-col">
            <label className="label_header" htmlFor="price">
              Price
            </label>
            <input
              className="input_outline"
              type="number"
              name="price"
              id="price"
            />
          </div>
          <div className="flex flex-col">
            <label className="label_header" htmlFor="address">
              Address
            </label>
            <select className="input_outline" name="address" id="address">
              <option value=""></option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="label_header" htmlFor="category">
              Category
            </label>
            <select className="input_outline" name="category" id="category">
              <option value=""></option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="label_header" htmlFor="subcategory">
              Subcategory
            </label>
            <select
              className="input_outline"
              name="subcategory"
              id="subcategory">
              <option value=""></option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="label_header" htmlFor="coverImg">
              Cover Image
            </label>
            <input
              className="input_outline"
              type="file"
              name="coverImg"
              id="coverImg"
            />
          </div>
          <div className="flex flex-col">
            <label className="label_header" htmlFor="images">
              Images
            </label>
            <input
              className="input_outline"
              type="file"
              name="images"
              id="images"
              multiple
            />
          </div>
          <button
            type="submit"
            className="text-white  font-bold transition-colors ease-linear duration-200 px-8 py-3 rounded shadow-2xl mt-5  bg-[#373373] hover:bg-[#4a4675]">
            Post Ad
          </button>
        </form>
      </div>
    </>
  );
}
