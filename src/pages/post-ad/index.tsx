import { useMutation } from '@apollo/client';
import { CREATE_AD_M } from '../../graphql/mutations/CREATE_AD_M';
import PostAdSuccess from '../../components/PageParts/PostAdSuccess';
import Error from '../../components/PageParts/Error';
import { useState, useRef, useEffect } from 'react';
import CategorySelect from '../../components/PageParts/CategorySelect';
import { CATEGORIES_Q } from '../../graphql/queries/CATEGORIES_Q';
import { useQuery } from '@apollo/client';
import { CREATE_IMAGES_M } from '../../graphql/mutations/CREATE_IMAGES_M';
import { useCurrentUser } from '../../hooks/useCurrentUser';

export default function PostAdPage() {
  const formRef = useRef(null);
  const currentUser = useCurrentUser()

  const sellerId = currentUser?.seller?.id;

  const [selectedCategory, setSelectedCategory] = useState('');

  const [createAdMutation, { data: createdAdData, error: createdAdError }] =
    useMutation(CREATE_AD_M);
  const [createImagesMutation, { error: createImagesError }] =
    useMutation(CREATE_IMAGES_M);

  const { data: categoriesData, error: categoriesError } =
    useQuery(CATEGORIES_Q);

  const [stateCreated, setStateCreated] = useState(false);

  const categories = categoriesData?.categories || [];
  const subcategories =
    categories.find((category) => category.id === selectedCategory)
      ?.subcategories || [];

  const createAd = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const price = form.price.value;
    const address = form.address.value;
    const categoryId = form.category.value;
    const subcategoryId = form.subcategory.value;
    const coverImg = form.coverImg.files[0];
    const images = Array.from(form.images.files);

    console.log(images);

    const createdAdResponse = await createAdMutation({
      variables: {
        title,
        categoryId,
        subcategoryId,
        description,
        address,
        price,
        createdAt: new Date().toISOString(),
        coverImg,
        sellerId
      }
    });
    console.log(createdAdResponse);

    const createdAdId = createdAdResponse.data.createAd.id;

    const createImagesData = images.map((imageFile) => {
      return {
        ad: { connect: { id: createdAdId } },
        file: {
          upload: imageFile
        }
      };
    });

    console.log(createImagesData);

    await createImagesMutation({
      variables: {
        data: createImagesData
      }
    });

    setStateCreated(true);
  };

  useEffect(() => {
    if (!stateCreated) {
      formRef.current.reset();
    }
  }, [stateCreated]);

  if (createdAdError || createImagesError || categoriesError) return <Error />;

  const createdAdId = createdAdData?.createAd?.id;

  return (
    <>
      {stateCreated && (
        <div className="sticky h-full top-0 left-0">
          <PostAdSuccess
            createdAdId={createdAdId}
            onCreateNew={() => setStateCreated(false)}
          />
        </div>
      )}

      <div className="container mx-auto max-w-[1140px] py-5 px-4">
        <h1 className="text-3xl font-bold text-[#373373] text-center">
          Post Ad
        </h1>
        <form
          ref={formRef}
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
              required
            />
          </div>

          <div className="flex flex-col max-h-32">
            <label className="label_header" htmlFor="description">
              Description
            </label>
            <textarea
              className="input_outline min-h-16 "
              name="description"
              id="description"
              cols={30}
              rows={100}></textarea>
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
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="label_header" htmlFor="address">
              Address
            </label>
            <input
              className="input_outline"
              type="text"
              name="address"
              id="address"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="label_header" htmlFor="category">
              Category
            </label>
            <CategorySelect
              name="category"
              items={categories}
              onChange={setSelectedCategory}
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="label_header" htmlFor="subcategory">
              Subcategory
            </label>
            <CategorySelect name="subcategory" items={subcategories} required />
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
