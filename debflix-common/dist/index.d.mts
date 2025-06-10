import { z } from 'zod';

declare const actorsSchema: z.ZodObject<{
    name: z.ZodString;
    birthDate: z.ZodNumber;
    movies: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        title: z.ZodString;
        year: z.ZodNumber;
        director: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        id: string;
        title: string;
        year: number;
        director: string;
    }, {
        id: string;
        title: string;
        year: number;
        director: string;
    }>, "many">>;
}, "strict", z.ZodTypeAny, {
    name: string;
    birthDate: number;
    movies?: {
        id: string;
        title: string;
        year: number;
        director: string;
    }[] | undefined;
}, {
    name: string;
    birthDate: number;
    movies?: {
        id: string;
        title: string;
        year: number;
        director: string;
    }[] | undefined;
}>;
type actorsInput = z.infer<typeof actorsSchema>;
declare const addActorSchema: {
    body: z.ZodObject<{
        name: z.ZodString;
        birthDate: z.ZodNumber;
        movies: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            title: z.ZodString;
            year: z.ZodNumber;
            director: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            id: string;
            title: string;
            year: number;
            director: string;
        }, {
            id: string;
            title: string;
            year: number;
            director: string;
        }>, "many">>;
    }, "strict", z.ZodTypeAny, {
        name: string;
        birthDate: number;
        movies?: {
            id: string;
            title: string;
            year: number;
            director: string;
        }[] | undefined;
    }, {
        name: string;
        birthDate: number;
        movies?: {
            id: string;
            title: string;
            year: number;
            director: string;
        }[] | undefined;
    }>;
};

declare const categoriesSchema: z.ZodObject<{
    name: z.ZodString;
    movies: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        title: z.ZodString;
        year: z.ZodNumber;
        director: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        id: string;
        title: string;
        year: number;
        director: string;
    }, {
        id: string;
        title: string;
        year: number;
        director: string;
    }>, "many">>;
}, "strict", z.ZodTypeAny, {
    name: string;
    movies?: {
        id: string;
        title: string;
        year: number;
        director: string;
    }[] | undefined;
}, {
    name: string;
    movies?: {
        id: string;
        title: string;
        year: number;
        director: string;
    }[] | undefined;
}>;
type categoriesInput = z.infer<typeof categoriesSchema>;
declare const addCategorySchema: {
    body: z.ZodObject<{
        name: z.ZodString;
        movies: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            title: z.ZodString;
            year: z.ZodNumber;
            director: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            id: string;
            title: string;
            year: number;
            director: string;
        }, {
            id: string;
            title: string;
            year: number;
            director: string;
        }>, "many">>;
    }, "strict", z.ZodTypeAny, {
        name: string;
        movies?: {
            id: string;
            title: string;
            year: number;
            director: string;
        }[] | undefined;
    }, {
        name: string;
        movies?: {
            id: string;
            title: string;
            year: number;
            director: string;
        }[] | undefined;
    }>;
};

declare const moviesSchema: z.ZodObject<{
    id: z.ZodString;
    title: z.ZodString;
    year: z.ZodNumber;
    director: z.ZodString;
}, "strict", z.ZodTypeAny, {
    id: string;
    title: string;
    year: number;
    director: string;
}, {
    id: string;
    title: string;
    year: number;
    director: string;
}>;
declare const moviesInputSchema: z.ZodObject<Omit<{
    id: z.ZodString;
    title: z.ZodString;
    year: z.ZodNumber;
    director: z.ZodString;
}, "id">, "strict", z.ZodTypeAny, {
    title: string;
    year: number;
    director: string;
}, {
    title: string;
    year: number;
    director: string;
}>;
declare const addMovieSchema: {
    body: z.ZodObject<Omit<{
        id: z.ZodString;
        title: z.ZodString;
        year: z.ZodNumber;
        director: z.ZodString;
    }, "id">, "strict", z.ZodTypeAny, {
        title: string;
        year: number;
        director: string;
    }, {
        title: string;
        year: number;
        director: string;
    }>;
};
type moviesInput = z.infer<typeof moviesInputSchema>;

declare const idParamsSchema: z.ZodObject<{
    id: z.ZodString;
}, "strict", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
declare const getByIdParamsSchema: {
    params: z.ZodObject<{
        id: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>;
};

declare const idQuerySchema: z.ZodObject<{
    id: z.ZodString;
}, "strict", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
declare const getByIdQuerySchema: {
    querystring: z.ZodObject<{
        id: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>;
};

interface BaseEntity {
    id: string;
}

interface Movie extends BaseEntity {
    title: string;
    year: number;
    director: string;
}

interface Actor extends BaseEntity {
    name: string;
    birthDate: Date;
    movies?: Movie[];
}

interface Category extends BaseEntity {
    name: string;
    movies: Movie[];
}

export { type Actor, type BaseEntity, type Category, type Movie, type actorsInput, actorsSchema, addActorSchema, addCategorySchema, addMovieSchema, type categoriesInput, categoriesSchema, getByIdParamsSchema, getByIdQuerySchema, idParamsSchema, idQuerySchema, type moviesInput, moviesInputSchema, moviesSchema };
