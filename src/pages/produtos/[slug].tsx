import React, { useState, useEffect, useCallback, useRef } from 'react';
import BeautyStars from 'beauty-stars';
import { MdRemove, MdAdd } from 'react-icons/md';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import { v4 as uuidv4 } from 'uuid';
import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import * as fbq from '../../lib/fpixel';

import SEO from '../../components/SEO';
import Header from '../../components/Header';
import Button from '../../components/Button';
import StarsRating from '../../components/StarsRating';
import ImageSlider from '../../components/ImageSlider';
import Input from '../../components/Input';
import Upload from '../../components/Upload';
import FileList from '../../components/FileList';
import Review from '../../components/Review';
import Footer from '../../components/Footer';

import { useCart } from '../../context/cart';
import { useFiles } from '../../context/files';
import { useToast } from '../../context/toast';

import getValidationErrors from '../../utils/getValidationErros';

import api from '../../services';

import 'pure-react-carousel/dist/react-carousel.es.css';

import {
  FallbackDiv,
  Container,
  Content,
  LeftSide,
  CurrentImage,
  CarouselDiv,
  CarouselDivPhone,
  ImgArea,
  ButtonBackCustom,
  ButtonNextCustom,
  RightSide,
  TitleArea,
  ReviewArea,
  PriceArea,
  PromoArea,
  OldPrice,
  NewPrice,
  EconomyArea,
  VariantsArea,
  Variant,
  SelectArea,
  VariantQtd,
  QtdArea,
  LessButton,
  Mid,
  PlusButton,
  AddToCartArea,
  DescriptionArea,
  Markdown,
  ReviewCustomersArea,
  AssessmentsArea,
  AssessmentsGraph,
  LeftAssessmentsGraph,
  Average,
  Graph,
  GraphOne,
  GraphTwo,
  RightAssessmentsGraph,
  ButtonAssessment,
  FormArea,
  ImageArea,
  ReviewList,
} from '../../styles/pages/Product';

interface IImagesArray {
  url: string;
  name: string;
}

interface IColor {
  name: string;
}

interface IPrice {
  name: string;
  price: number;
  priceString: string;
  oldPriceString: string;
}

interface IVariants {
  color: IColor[];
  size: IPrice[];
  model: IPrice[];
}

interface IReview {
  _id: string;
  name: string;
  stars: number;
  state: string;
  images_url: string[];
  feedback: string;
  updatedAt: string;
}

interface IProduct {
  _id: string;
  imagesArray: Array<IImagesArray[]>;
  title: string;
  description: string;
  slug: string;
  seoDescription: string;
  price: number;
  oldPrice: number;
  discount: number;
  variants: IVariants;
  priceString: string;
  oldPriceString: string;
  discountString: string;
  reviewsCount: number;
  averageReviews: number;
  reviews: IReview[];
}

interface IRangeParcentage {
  five: number;
  four: number;
  three: number;
  two: number;
  one: number;
}

interface IProductProps {
  product: IProduct;
  reviews: IReview[];
  rangeParcentage: IRangeParcentage;
}

interface ReviewFormData {
  name: string;
  state: string;
  feedback: string;
}

const Product: React.FC<IProductProps> = ({
  product,
  reviews,
  rangeParcentage,
}) => {
  const router = useRouter();
  const { addProductToCart } = useCart();
  const { clearUploaded, uploadedImages } = useFiles();
  const { addToast } = useToast();

  const reviewsRef = useRef(null);
  const formRef = useRef<FormHandles>(null);

  const [qtd, setQtd] = useState(1);
  const [imgUrlSelected, setImgUrlSelected] = useState<IImagesArray>({
    url: '',
    name: '',
  });
  const [newOldPriceString, setNewOldPriceString] = useState('');
  const [newPriceString, setPriceString] = useState('');
  const [colorSelected, setColorSelected] = useState({} as IColor);
  const [sizeSelected, setSizeSelected] = useState({} as IPrice);
  const [modelSelected, setModelSelected] = useState({} as IPrice);
  const [open, setOpen] = useState(false);
  const [newReviews, setNewReviews] = useState<IReview[]>([]);
  const [page, setPage] = useState(0);
  const [hideSeeMore, setHideSeeMore] = useState(false);
  const [stars, setStars] = useState(1);
  const [activeStar, setActiveStar] = useState(5);
  const [loadByRange, setLoadByRange] = useState(false);

  useEffect(() => {
    router.prefetch('/carrinho');
  }, [router]);

  useEffect(() => {
    const { imagesArray, oldPriceString, priceString, variants } = product;

    if (imagesArray) {
      setImgUrlSelected({
        url: imagesArray[0][0].url,
        name: imagesArray[0][0].name,
      });
    }

    if (oldPriceString) {
      setNewOldPriceString(oldPriceString);
    }

    if (priceString) {
      setPriceString(priceString);
    }

    if (variants.color) {
      setColorSelected({ ...variants.color[0] });
    }

    if (variants.size) {
      setSizeSelected({ ...variants.size[0] });
    }

    if (variants.model) {
      setModelSelected({ ...variants.model[0] });
    }

    if (reviews) {
      setNewReviews(reviews);
    }
  }, [product, reviews]);

  const handleChangeQtd = useCallback(
    (type: string) => {
      let newQtd = qtd;

      if (type === 'remove') {
        newQtd -= 1;

        if (newQtd < 1) {
          setQtd(1);
        } else {
          setQtd(newQtd);
        }
      } else {
        newQtd += 1;
        setQtd(newQtd);
      }
    },
    [qtd],
  );

  const handleChangeColor = useCallback(
    (e) => {
      const findColor = product.variants.color.find(
        (item) => item.name === e.target.value,
      );

      setColorSelected(findColor);
    },
    [product],
  );

  const handleChangeSize = useCallback(
    (e) => {
      const findSize = product.variants.size.find(
        (item) => item.name === `${e.target.value} `,
      );

      setNewOldPriceString(findSize.oldPriceString);
      setPriceString(findSize.priceString);
      setSizeSelected(findSize);
    },
    [product],
  );

  const handleChangeModel = useCallback(
    (e) => {
      const findModel = product.variants.model.find(
        (item) => item.name === `${e.target.value} `,
      );

      setNewOldPriceString(findModel.oldPriceString);
      setPriceString(findModel.priceString);
      setModelSelected(findModel);
    },
    [product],
  );

  const handleAddToCart = useCallback(() => {
    const newProduct = {
      _id: product._id,
      title: product.title,
      description: product.description,
      slug: product.slug,
      imageUrl: product.imagesArray[0][0].url,
      qtd,
      price: sizeSelected.price ? sizeSelected.price : modelSelected.price,
      priceString: sizeSelected.priceString
        ? sizeSelected.priceString
        : modelSelected.priceString,
      color: colorSelected.name,
      size: sizeSelected.name ? sizeSelected.name : '',
      model: modelSelected.name ? modelSelected.name : '',
    };

    addProductToCart(newProduct);
    fbq.event('AddToCart');
    router.push('/carrinho');
  }, [
    product,
    qtd,
    colorSelected,
    sizeSelected,
    modelSelected,
    addProductToCart,
    router,
  ]);

  const handleLoadReviewsByStars = useCallback(
    async (starsNumber: number) => {
      try {
        const response = await api.get(
          `/store/products/${product._id}/reviews/stars/${starsNumber}?page=0&limit=5`,
        );

        setNewReviews(response.data.reviews);
        setActiveStar(starsNumber);
        setHideSeeMore(false);
        setPage(0);
        setLoadByRange(true);
      } catch (err) {
        console.log(err);
      }
    },
    [product],
  );

  const handleChangePage = useCallback(async () => {
    try {
      const newPage = page + 1;

      let response = {} as any;

      if (!loadByRange) {
        response = await api.get(
          `/store/products/${product._id}/reviews?page=${newPage}&limit=5`,
        );
      } else {
        response = await api.get(
          `/store/products/${product._id}/reviews/stars/${activeStar}?page=${newPage}&limit=5`,
        );
      }

      if (response.data.reviews.length === 0) {
        setHideSeeMore(true);
      } else {
        setNewReviews((state) => state.concat(...response.data.reviews));
        setPage(newPage);
      }
    } catch (err) {
      console.log(err);
    }
  }, [page, product, activeStar, loadByRange]);

  const handleSubmit = useCallback(
    async (data: ReviewFormData, { reset }) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome é obrigatório'),
          state: Yup.string().required('Estado é obrigatório'),
          feedback: Yup.string().required('Feedback é obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const response = await api.post(
          `/store/products/${product._id}/reviews`,
          {
            name: data.name,
            stars,
            feedback: data.feedback,
            state: data.state.toUpperCase(),
          },
        );

        const dataImages = new FormData();

        uploadedImages.forEach((image) => {
          if (image.file) {
            dataImages.append('review_images', image.file);
          }
        });

        await api.patch(
          `/store/reviews/${response.data._id}/images`,
          dataImages,
        );

        reset();
        setStars(1);
        clearUploaded();
        setOpen(false);
        addToast({
          type: 'success',
          title: 'Review realizado!',
          description: 'Após aprovação, será exibido na parte de reviews',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        } else {
          addToast({
            type: 'error',
            title: 'Erro ao realizar review!',
            description: 'Por favor, tente mais tarde.',
          });

          console.log(err);
        }
      }
    },
    [stars, product, clearUploaded, uploadedImages, addToast],
  );

  return (
    <>
      <Header closeMenu />

      {router.isFallback ? (
        <FallbackDiv>
          <h1>Carregando...</h1>
        </FallbackDiv>
      ) : (
        <>
          <SEO
            title={product.title}
            image={product.imagesArray[0][0].url}
            description={product.seoDescription}
          />
          <Container>
            <Content>
              <LeftSide>
                <CurrentImage
                  src={imgUrlSelected.url}
                  alt={imgUrlSelected.name}
                />

                <CarouselDiv>
                  <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={42}
                    totalSlides={product.imagesArray.length}
                  >
                    <Slider>
                      {product.imagesArray.map((item, index) => {
                        return (
                          <Slide key={uuidv4()} index={index}>
                            <ImgArea disableSpaceBetween={item.length < 3}>
                              {item.map((img) => {
                                return (
                                  <ImageSlider
                                    key={uuidv4()}
                                    url={img.url}
                                    name={img.name}
                                    setImgUrlSelected={setImgUrlSelected}
                                    imgUrlSelected={imgUrlSelected}
                                    applyMarginLeft={item.length < 3}
                                  />
                                );
                              })}
                            </ImgArea>
                          </Slide>
                        );
                      })}
                    </Slider>
                    <ButtonBackCustom>
                      <IoIosArrowBack size={30} />
                    </ButtonBackCustom>

                    <ButtonNextCustom>
                      <IoIosArrowForward size={30} />
                    </ButtonNextCustom>
                  </CarouselProvider>
                </CarouselDiv>

                <CarouselDivPhone>
                  <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={46}
                    totalSlides={product.imagesArray.length}
                  >
                    <Slider>
                      {product.imagesArray.map((item, index) => {
                        return (
                          <Slide key={uuidv4()} index={index}>
                            <ImgArea disableSpaceBetween={item.length < 3}>
                              {item.map((img) => {
                                return (
                                  <ImageSlider
                                    key={uuidv4()}
                                    url={img.url}
                                    name={img.name}
                                    setImgUrlSelected={setImgUrlSelected}
                                    imgUrlSelected={imgUrlSelected}
                                    applyMarginLeft={item.length < 3}
                                  />
                                );
                              })}
                            </ImgArea>
                          </Slide>
                        );
                      })}
                    </Slider>
                    <ButtonBackCustom phone="true">
                      <IoIosArrowBack size={30} />
                    </ButtonBackCustom>

                    <ButtonNextCustom phone="true">
                      <IoIosArrowForward size={30} />
                    </ButtonNextCustom>
                  </CarouselProvider>
                </CarouselDivPhone>
              </LeftSide>
              <RightSide>
                <TitleArea>
                  <h1>{product.title}</h1>
                </TitleArea>

                <ReviewArea
                  onClick={() => {
                    reviewsRef.current.scrollIntoView({
                      behavior: 'smooth',
                    });
                  }}
                >
                  <StarsRating value={product.averageReviews} productPage />

                  <span>({product.reviewsCount})</span>
                </ReviewArea>

                <PriceArea>
                  {product.discount > 0 && (
                    <PromoArea>
                      <span>EM PROMOÇÃO</span>
                    </PromoArea>
                  )}

                  {product.discount > 0 && (
                    <OldPrice>
                      De: <s>{newOldPriceString}</s>
                    </OldPrice>
                  )}

                  <NewPrice>Por: {newPriceString}</NewPrice>
                  {product.discount > 0 && (
                    <EconomyArea>
                      <span>economia {product.discountString}</span>
                    </EconomyArea>
                  )}
                </PriceArea>

                <VariantsArea>
                  <Variant>
                    <span>Cor</span>
                    <SelectArea>
                      <select onChange={handleChangeColor}>
                        {product.variants.color.map((color) => {
                          return (
                            <option key={color.name} value={color.name}>
                              {color.name}
                            </option>
                          );
                        })}
                      </select>
                      <IoIosArrowForward />
                    </SelectArea>
                  </Variant>

                  {product.variants.size.length > 0 && (
                    <Variant>
                      <span>Tamanho</span>
                      <SelectArea>
                        <select onChange={handleChangeSize}>
                          {product.variants.size.map((size) => {
                            return <option key={size.name}>{size.name}</option>;
                          })}
                        </select>
                        <IoIosArrowForward />
                      </SelectArea>
                    </Variant>
                  )}

                  {product.variants.size.length === 0 && (
                    <Variant>
                      <span>Modelo</span>

                      <SelectArea>
                        <select onChange={handleChangeModel}>
                          {product.variants.model.map((model) => {
                            return (
                              <option key={model.name}>{model.name}</option>
                            );
                          })}
                        </select>
                        <IoIosArrowForward />
                      </SelectArea>
                    </Variant>
                  )}

                  <VariantQtd>
                    <span>Qtd</span>

                    <QtdArea>
                      <LessButton onClick={() => handleChangeQtd('remove')}>
                        <MdRemove />
                      </LessButton>
                      <Mid>
                        <span>{qtd}</span>
                      </Mid>
                      <PlusButton onClick={() => handleChangeQtd('add')}>
                        <MdAdd />
                      </PlusButton>
                    </QtdArea>
                  </VariantQtd>
                </VariantsArea>

                <AddToCartArea>
                  <VariantQtd phone="true">
                    <span>Qtd</span>

                    <QtdArea>
                      <LessButton onClick={() => handleChangeQtd('remove')}>
                        <MdRemove />
                      </LessButton>
                      <Mid>
                        <span>{qtd}</span>
                      </Mid>
                      <PlusButton onClick={() => handleChangeQtd('add')}>
                        <MdAdd />
                      </PlusButton>
                    </QtdArea>
                  </VariantQtd>

                  <Button phoneMode onClick={handleAddToCart}>
                    ADICIONAR AO CARRINHO
                  </Button>
                </AddToCartArea>

                <DescriptionArea>
                  <h2>Detalhes do Produto</h2>

                  <Markdown source={product.description} />
                </DescriptionArea>
              </RightSide>
            </Content>

            <ReviewCustomersArea ref={reviewsRef}>
              <AssessmentsArea>
                <h4>Avaliações</h4>

                <AssessmentsGraph>
                  <LeftAssessmentsGraph>
                    <div>
                      <Average>
                        <span>
                          {product.averageReviews > 0
                            ? product.averageReviews.toFixed(1)
                            : 0}
                        </span>
                      </Average>
                      <span>Base em {product.reviewsCount} avaliações</span>
                    </div>

                    <Graph>
                      <ul>
                        <li>
                          <button
                            type="button"
                            onClick={() => handleLoadReviewsByStars(5)}
                          >
                            5
                            <GraphOne>
                              <GraphTwo porcentage={rangeParcentage.five} />
                            </GraphOne>
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            onClick={() => handleLoadReviewsByStars(4)}
                          >
                            4
                            <GraphOne>
                              <GraphTwo porcentage={rangeParcentage.four} />
                            </GraphOne>
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            onClick={() => handleLoadReviewsByStars(3)}
                          >
                            3
                            <GraphOne>
                              <GraphTwo porcentage={rangeParcentage.three} />
                            </GraphOne>
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            onClick={() => handleLoadReviewsByStars(2)}
                          >
                            2
                            <GraphOne>
                              <GraphTwo porcentage={rangeParcentage.two} />
                            </GraphOne>
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            onClick={() => handleLoadReviewsByStars(1)}
                          >
                            1
                            <GraphOne>
                              <GraphTwo porcentage={rangeParcentage.one} />
                            </GraphOne>
                          </button>
                        </li>
                      </ul>
                    </Graph>
                  </LeftAssessmentsGraph>

                  <RightAssessmentsGraph>
                    <ButtonAssessment onClick={() => setOpen(!open)}>
                      {open ? 'Fechar' : 'Avaliar'}
                    </ButtonAssessment>
                  </RightAssessmentsGraph>
                </AssessmentsGraph>
              </AssessmentsArea>
            </ReviewCustomersArea>

            {open && (
              <FormArea>
                <h4>Enviar Avaliação</h4>

                <Form ref={formRef} onSubmit={handleSubmit}>
                  <span>Sua nota</span>
                  <BeautyStars
                    value={stars}
                    gap="8px"
                    activeColor="#FFB900"
                    inactiveColor="#fce4a1"
                    size="20px"
                    onChange={(value) => setStars(value)}
                  />

                  <span>Nome</span>
                  <Input name="name" placeholder="Ex: Maria Rita" />

                  <span>Estado</span>
                  <Input name="state" maxLength={2} placeholder="Ex: SP" />

                  <span>Feedback</span>
                  <Input
                    name="feedback"
                    placeholder="Escreva aqui seu feedback. Máximo 200 caracteres"
                    maxLength={200}
                  />

                  <ImageArea>
                    <Upload />
                    <FileList />
                  </ImageArea>

                  <ButtonAssessment type="submit" marginTop>
                    Enviar
                  </ButtonAssessment>
                </Form>
              </FormArea>
            )}

            <ReviewList>
              {newReviews.map((item) => {
                return <Review key={item._id} item={item} />;
              })}

              {!hideSeeMore && reviews.length > 0 && (
                <Button halfWidth onClick={() => handleChangePage()}>
                  Ver mais
                </Button>
              )}
            </ReviewList>
          </Container>
        </>
      )}

      <Footer />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await api.get(
    '/store/products?page=0&limit=6&order=recentDate',
  );

  return {
    paths: response.data.map((product) => {
      return {
        params: { slug: product.slug },
      };
    }),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<IProductProps> = async (
  context,
) => {
  const { slug } = context.params;

  const response = await api.get(`/store/products/${slug}`);

  const responseReviews = await api.get(
    `/store/products/${response.data._id}/reviews?page=0&limit=5`,
  );
  const responseReviewsRanges = await api.get(
    `/store/products/${response.data._id}/reviews/ranges`,
  );

  return {
    props: {
      product: response.data,
      reviews: responseReviews.data.reviews,
      rangeParcentage: responseReviewsRanges.data.rangeParcentage,
    },
    revalidate: 120,
  };
};

export default Product;
