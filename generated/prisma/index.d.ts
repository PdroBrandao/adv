
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Advogado
 * 
 */
export type Advogado = $Result.DefaultSelection<Prisma.$AdvogadoPayload>
/**
 * Model Processo
 * 
 */
export type Processo = $Result.DefaultSelection<Prisma.$ProcessoPayload>
/**
 * Model Intimacao
 * 
 */
export type Intimacao = $Result.DefaultSelection<Prisma.$IntimacaoPayload>
/**
 * Model Notificacao
 * 
 */
export type Notificacao = $Result.DefaultSelection<Prisma.$NotificacaoPayload>
/**
 * Model GoogleAuth
 * 
 */
export type GoogleAuth = $Result.DefaultSelection<Prisma.$GoogleAuthPayload>
/**
 * Model ExecucaoLog
 * 
 */
export type ExecucaoLog = $Result.DefaultSelection<Prisma.$ExecucaoLogPayload>
/**
 * Model Feriado
 * 
 */
export type Feriado = $Result.DefaultSelection<Prisma.$FeriadoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Advogados
 * const advogados = await prisma.advogado.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Advogados
   * const advogados = await prisma.advogado.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.advogado`: Exposes CRUD operations for the **Advogado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Advogados
    * const advogados = await prisma.advogado.findMany()
    * ```
    */
  get advogado(): Prisma.AdvogadoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.processo`: Exposes CRUD operations for the **Processo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Processos
    * const processos = await prisma.processo.findMany()
    * ```
    */
  get processo(): Prisma.ProcessoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.intimacao`: Exposes CRUD operations for the **Intimacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Intimacaos
    * const intimacaos = await prisma.intimacao.findMany()
    * ```
    */
  get intimacao(): Prisma.IntimacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notificacao`: Exposes CRUD operations for the **Notificacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notificacaos
    * const notificacaos = await prisma.notificacao.findMany()
    * ```
    */
  get notificacao(): Prisma.NotificacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.googleAuth`: Exposes CRUD operations for the **GoogleAuth** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GoogleAuths
    * const googleAuths = await prisma.googleAuth.findMany()
    * ```
    */
  get googleAuth(): Prisma.GoogleAuthDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.execucaoLog`: Exposes CRUD operations for the **ExecucaoLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExecucaoLogs
    * const execucaoLogs = await prisma.execucaoLog.findMany()
    * ```
    */
  get execucaoLog(): Prisma.ExecucaoLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feriado`: Exposes CRUD operations for the **Feriado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Feriados
    * const feriados = await prisma.feriado.findMany()
    * ```
    */
  get feriado(): Prisma.FeriadoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Advogado: 'Advogado',
    Processo: 'Processo',
    Intimacao: 'Intimacao',
    Notificacao: 'Notificacao',
    GoogleAuth: 'GoogleAuth',
    ExecucaoLog: 'ExecucaoLog',
    Feriado: 'Feriado'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "advogado" | "processo" | "intimacao" | "notificacao" | "googleAuth" | "execucaoLog" | "feriado"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Advogado: {
        payload: Prisma.$AdvogadoPayload<ExtArgs>
        fields: Prisma.AdvogadoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdvogadoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvogadoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdvogadoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvogadoPayload>
          }
          findFirst: {
            args: Prisma.AdvogadoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvogadoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdvogadoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvogadoPayload>
          }
          findMany: {
            args: Prisma.AdvogadoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvogadoPayload>[]
          }
          create: {
            args: Prisma.AdvogadoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvogadoPayload>
          }
          createMany: {
            args: Prisma.AdvogadoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdvogadoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvogadoPayload>[]
          }
          delete: {
            args: Prisma.AdvogadoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvogadoPayload>
          }
          update: {
            args: Prisma.AdvogadoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvogadoPayload>
          }
          deleteMany: {
            args: Prisma.AdvogadoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdvogadoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdvogadoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvogadoPayload>[]
          }
          upsert: {
            args: Prisma.AdvogadoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvogadoPayload>
          }
          aggregate: {
            args: Prisma.AdvogadoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdvogado>
          }
          groupBy: {
            args: Prisma.AdvogadoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdvogadoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdvogadoCountArgs<ExtArgs>
            result: $Utils.Optional<AdvogadoCountAggregateOutputType> | number
          }
        }
      }
      Processo: {
        payload: Prisma.$ProcessoPayload<ExtArgs>
        fields: Prisma.ProcessoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProcessoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProcessoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessoPayload>
          }
          findFirst: {
            args: Prisma.ProcessoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProcessoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessoPayload>
          }
          findMany: {
            args: Prisma.ProcessoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessoPayload>[]
          }
          create: {
            args: Prisma.ProcessoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessoPayload>
          }
          createMany: {
            args: Prisma.ProcessoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProcessoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessoPayload>[]
          }
          delete: {
            args: Prisma.ProcessoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessoPayload>
          }
          update: {
            args: Prisma.ProcessoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessoPayload>
          }
          deleteMany: {
            args: Prisma.ProcessoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProcessoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProcessoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessoPayload>[]
          }
          upsert: {
            args: Prisma.ProcessoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessoPayload>
          }
          aggregate: {
            args: Prisma.ProcessoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProcesso>
          }
          groupBy: {
            args: Prisma.ProcessoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProcessoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProcessoCountArgs<ExtArgs>
            result: $Utils.Optional<ProcessoCountAggregateOutputType> | number
          }
        }
      }
      Intimacao: {
        payload: Prisma.$IntimacaoPayload<ExtArgs>
        fields: Prisma.IntimacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IntimacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntimacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IntimacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntimacaoPayload>
          }
          findFirst: {
            args: Prisma.IntimacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntimacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IntimacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntimacaoPayload>
          }
          findMany: {
            args: Prisma.IntimacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntimacaoPayload>[]
          }
          create: {
            args: Prisma.IntimacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntimacaoPayload>
          }
          createMany: {
            args: Prisma.IntimacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IntimacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntimacaoPayload>[]
          }
          delete: {
            args: Prisma.IntimacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntimacaoPayload>
          }
          update: {
            args: Prisma.IntimacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntimacaoPayload>
          }
          deleteMany: {
            args: Prisma.IntimacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IntimacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IntimacaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntimacaoPayload>[]
          }
          upsert: {
            args: Prisma.IntimacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntimacaoPayload>
          }
          aggregate: {
            args: Prisma.IntimacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIntimacao>
          }
          groupBy: {
            args: Prisma.IntimacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<IntimacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.IntimacaoCountArgs<ExtArgs>
            result: $Utils.Optional<IntimacaoCountAggregateOutputType> | number
          }
        }
      }
      Notificacao: {
        payload: Prisma.$NotificacaoPayload<ExtArgs>
        fields: Prisma.NotificacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          findFirst: {
            args: Prisma.NotificacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          findMany: {
            args: Prisma.NotificacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>[]
          }
          create: {
            args: Prisma.NotificacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          createMany: {
            args: Prisma.NotificacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>[]
          }
          delete: {
            args: Prisma.NotificacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          update: {
            args: Prisma.NotificacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          deleteMany: {
            args: Prisma.NotificacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificacaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>[]
          }
          upsert: {
            args: Prisma.NotificacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          aggregate: {
            args: Prisma.NotificacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotificacao>
          }
          groupBy: {
            args: Prisma.NotificacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificacaoCountArgs<ExtArgs>
            result: $Utils.Optional<NotificacaoCountAggregateOutputType> | number
          }
        }
      }
      GoogleAuth: {
        payload: Prisma.$GoogleAuthPayload<ExtArgs>
        fields: Prisma.GoogleAuthFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GoogleAuthFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleAuthPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GoogleAuthFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleAuthPayload>
          }
          findFirst: {
            args: Prisma.GoogleAuthFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleAuthPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GoogleAuthFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleAuthPayload>
          }
          findMany: {
            args: Prisma.GoogleAuthFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleAuthPayload>[]
          }
          create: {
            args: Prisma.GoogleAuthCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleAuthPayload>
          }
          createMany: {
            args: Prisma.GoogleAuthCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GoogleAuthCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleAuthPayload>[]
          }
          delete: {
            args: Prisma.GoogleAuthDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleAuthPayload>
          }
          update: {
            args: Prisma.GoogleAuthUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleAuthPayload>
          }
          deleteMany: {
            args: Prisma.GoogleAuthDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GoogleAuthUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GoogleAuthUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleAuthPayload>[]
          }
          upsert: {
            args: Prisma.GoogleAuthUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleAuthPayload>
          }
          aggregate: {
            args: Prisma.GoogleAuthAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGoogleAuth>
          }
          groupBy: {
            args: Prisma.GoogleAuthGroupByArgs<ExtArgs>
            result: $Utils.Optional<GoogleAuthGroupByOutputType>[]
          }
          count: {
            args: Prisma.GoogleAuthCountArgs<ExtArgs>
            result: $Utils.Optional<GoogleAuthCountAggregateOutputType> | number
          }
        }
      }
      ExecucaoLog: {
        payload: Prisma.$ExecucaoLogPayload<ExtArgs>
        fields: Prisma.ExecucaoLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExecucaoLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecucaoLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExecucaoLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecucaoLogPayload>
          }
          findFirst: {
            args: Prisma.ExecucaoLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecucaoLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExecucaoLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecucaoLogPayload>
          }
          findMany: {
            args: Prisma.ExecucaoLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecucaoLogPayload>[]
          }
          create: {
            args: Prisma.ExecucaoLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecucaoLogPayload>
          }
          createMany: {
            args: Prisma.ExecucaoLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExecucaoLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecucaoLogPayload>[]
          }
          delete: {
            args: Prisma.ExecucaoLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecucaoLogPayload>
          }
          update: {
            args: Prisma.ExecucaoLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecucaoLogPayload>
          }
          deleteMany: {
            args: Prisma.ExecucaoLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExecucaoLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExecucaoLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecucaoLogPayload>[]
          }
          upsert: {
            args: Prisma.ExecucaoLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecucaoLogPayload>
          }
          aggregate: {
            args: Prisma.ExecucaoLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExecucaoLog>
          }
          groupBy: {
            args: Prisma.ExecucaoLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExecucaoLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExecucaoLogCountArgs<ExtArgs>
            result: $Utils.Optional<ExecucaoLogCountAggregateOutputType> | number
          }
        }
      }
      Feriado: {
        payload: Prisma.$FeriadoPayload<ExtArgs>
        fields: Prisma.FeriadoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeriadoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriadoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeriadoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriadoPayload>
          }
          findFirst: {
            args: Prisma.FeriadoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriadoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeriadoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriadoPayload>
          }
          findMany: {
            args: Prisma.FeriadoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriadoPayload>[]
          }
          create: {
            args: Prisma.FeriadoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriadoPayload>
          }
          createMany: {
            args: Prisma.FeriadoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeriadoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriadoPayload>[]
          }
          delete: {
            args: Prisma.FeriadoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriadoPayload>
          }
          update: {
            args: Prisma.FeriadoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriadoPayload>
          }
          deleteMany: {
            args: Prisma.FeriadoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeriadoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeriadoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriadoPayload>[]
          }
          upsert: {
            args: Prisma.FeriadoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriadoPayload>
          }
          aggregate: {
            args: Prisma.FeriadoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeriado>
          }
          groupBy: {
            args: Prisma.FeriadoGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeriadoGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeriadoCountArgs<ExtArgs>
            result: $Utils.Optional<FeriadoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    advogado?: AdvogadoOmit
    processo?: ProcessoOmit
    intimacao?: IntimacaoOmit
    notificacao?: NotificacaoOmit
    googleAuth?: GoogleAuthOmit
    execucaoLog?: ExecucaoLogOmit
    feriado?: FeriadoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AdvogadoCountOutputType
   */

  export type AdvogadoCountOutputType = {
    intimacoes: number
    processos: number
  }

  export type AdvogadoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    intimacoes?: boolean | AdvogadoCountOutputTypeCountIntimacoesArgs
    processos?: boolean | AdvogadoCountOutputTypeCountProcessosArgs
  }

  // Custom InputTypes
  /**
   * AdvogadoCountOutputType without action
   */
  export type AdvogadoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvogadoCountOutputType
     */
    select?: AdvogadoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdvogadoCountOutputType without action
   */
  export type AdvogadoCountOutputTypeCountIntimacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IntimacaoWhereInput
  }

  /**
   * AdvogadoCountOutputType without action
   */
  export type AdvogadoCountOutputTypeCountProcessosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcessoWhereInput
  }


  /**
   * Count Type ProcessoCountOutputType
   */

  export type ProcessoCountOutputType = {
    intimacoes: number
    advogados: number
  }

  export type ProcessoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    intimacoes?: boolean | ProcessoCountOutputTypeCountIntimacoesArgs
    advogados?: boolean | ProcessoCountOutputTypeCountAdvogadosArgs
  }

  // Custom InputTypes
  /**
   * ProcessoCountOutputType without action
   */
  export type ProcessoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessoCountOutputType
     */
    select?: ProcessoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProcessoCountOutputType without action
   */
  export type ProcessoCountOutputTypeCountIntimacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IntimacaoWhereInput
  }

  /**
   * ProcessoCountOutputType without action
   */
  export type ProcessoCountOutputTypeCountAdvogadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdvogadoWhereInput
  }


  /**
   * Count Type IntimacaoCountOutputType
   */

  export type IntimacaoCountOutputType = {
    Notificacao: number
  }

  export type IntimacaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Notificacao?: boolean | IntimacaoCountOutputTypeCountNotificacaoArgs
  }

  // Custom InputTypes
  /**
   * IntimacaoCountOutputType without action
   */
  export type IntimacaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntimacaoCountOutputType
     */
    select?: IntimacaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IntimacaoCountOutputType without action
   */
  export type IntimacaoCountOutputTypeCountNotificacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificacaoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Advogado
   */

  export type AggregateAdvogado = {
    _count: AdvogadoCountAggregateOutputType | null
    _min: AdvogadoMinAggregateOutputType | null
    _max: AdvogadoMaxAggregateOutputType | null
  }

  export type AdvogadoMinAggregateOutputType = {
    id: string | null
    nome: string | null
    oab: string | null
    telefone: string | null
    ativo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    googleCalendarId: string | null
  }

  export type AdvogadoMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    oab: string | null
    telefone: string | null
    ativo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    googleCalendarId: string | null
  }

  export type AdvogadoCountAggregateOutputType = {
    id: number
    nome: number
    oab: number
    telefone: number
    ativo: number
    createdAt: number
    updatedAt: number
    email: number
    googleCalendarId: number
    _all: number
  }


  export type AdvogadoMinAggregateInputType = {
    id?: true
    nome?: true
    oab?: true
    telefone?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    googleCalendarId?: true
  }

  export type AdvogadoMaxAggregateInputType = {
    id?: true
    nome?: true
    oab?: true
    telefone?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    googleCalendarId?: true
  }

  export type AdvogadoCountAggregateInputType = {
    id?: true
    nome?: true
    oab?: true
    telefone?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    googleCalendarId?: true
    _all?: true
  }

  export type AdvogadoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Advogado to aggregate.
     */
    where?: AdvogadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Advogados to fetch.
     */
    orderBy?: AdvogadoOrderByWithRelationInput | AdvogadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdvogadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Advogados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Advogados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Advogados
    **/
    _count?: true | AdvogadoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdvogadoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdvogadoMaxAggregateInputType
  }

  export type GetAdvogadoAggregateType<T extends AdvogadoAggregateArgs> = {
        [P in keyof T & keyof AggregateAdvogado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdvogado[P]>
      : GetScalarType<T[P], AggregateAdvogado[P]>
  }




  export type AdvogadoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdvogadoWhereInput
    orderBy?: AdvogadoOrderByWithAggregationInput | AdvogadoOrderByWithAggregationInput[]
    by: AdvogadoScalarFieldEnum[] | AdvogadoScalarFieldEnum
    having?: AdvogadoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdvogadoCountAggregateInputType | true
    _min?: AdvogadoMinAggregateInputType
    _max?: AdvogadoMaxAggregateInputType
  }

  export type AdvogadoGroupByOutputType = {
    id: string
    nome: string
    oab: string
    telefone: string
    ativo: boolean
    createdAt: Date
    updatedAt: Date
    email: string
    googleCalendarId: string | null
    _count: AdvogadoCountAggregateOutputType | null
    _min: AdvogadoMinAggregateOutputType | null
    _max: AdvogadoMaxAggregateOutputType | null
  }

  type GetAdvogadoGroupByPayload<T extends AdvogadoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdvogadoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdvogadoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdvogadoGroupByOutputType[P]>
            : GetScalarType<T[P], AdvogadoGroupByOutputType[P]>
        }
      >
    >


  export type AdvogadoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    oab?: boolean
    telefone?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    googleCalendarId?: boolean
    googleAuth?: boolean | Advogado$googleAuthArgs<ExtArgs>
    intimacoes?: boolean | Advogado$intimacoesArgs<ExtArgs>
    processos?: boolean | Advogado$processosArgs<ExtArgs>
    _count?: boolean | AdvogadoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["advogado"]>

  export type AdvogadoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    oab?: boolean
    telefone?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    googleCalendarId?: boolean
  }, ExtArgs["result"]["advogado"]>

  export type AdvogadoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    oab?: boolean
    telefone?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    googleCalendarId?: boolean
  }, ExtArgs["result"]["advogado"]>

  export type AdvogadoSelectScalar = {
    id?: boolean
    nome?: boolean
    oab?: boolean
    telefone?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    googleCalendarId?: boolean
  }

  export type AdvogadoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "oab" | "telefone" | "ativo" | "createdAt" | "updatedAt" | "email" | "googleCalendarId", ExtArgs["result"]["advogado"]>
  export type AdvogadoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    googleAuth?: boolean | Advogado$googleAuthArgs<ExtArgs>
    intimacoes?: boolean | Advogado$intimacoesArgs<ExtArgs>
    processos?: boolean | Advogado$processosArgs<ExtArgs>
    _count?: boolean | AdvogadoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AdvogadoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AdvogadoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AdvogadoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Advogado"
    objects: {
      googleAuth: Prisma.$GoogleAuthPayload<ExtArgs> | null
      intimacoes: Prisma.$IntimacaoPayload<ExtArgs>[]
      processos: Prisma.$ProcessoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      oab: string
      telefone: string
      ativo: boolean
      createdAt: Date
      updatedAt: Date
      email: string
      googleCalendarId: string | null
    }, ExtArgs["result"]["advogado"]>
    composites: {}
  }

  type AdvogadoGetPayload<S extends boolean | null | undefined | AdvogadoDefaultArgs> = $Result.GetResult<Prisma.$AdvogadoPayload, S>

  type AdvogadoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdvogadoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdvogadoCountAggregateInputType | true
    }

  export interface AdvogadoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Advogado'], meta: { name: 'Advogado' } }
    /**
     * Find zero or one Advogado that matches the filter.
     * @param {AdvogadoFindUniqueArgs} args - Arguments to find a Advogado
     * @example
     * // Get one Advogado
     * const advogado = await prisma.advogado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdvogadoFindUniqueArgs>(args: SelectSubset<T, AdvogadoFindUniqueArgs<ExtArgs>>): Prisma__AdvogadoClient<$Result.GetResult<Prisma.$AdvogadoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Advogado that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdvogadoFindUniqueOrThrowArgs} args - Arguments to find a Advogado
     * @example
     * // Get one Advogado
     * const advogado = await prisma.advogado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdvogadoFindUniqueOrThrowArgs>(args: SelectSubset<T, AdvogadoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdvogadoClient<$Result.GetResult<Prisma.$AdvogadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Advogado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvogadoFindFirstArgs} args - Arguments to find a Advogado
     * @example
     * // Get one Advogado
     * const advogado = await prisma.advogado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdvogadoFindFirstArgs>(args?: SelectSubset<T, AdvogadoFindFirstArgs<ExtArgs>>): Prisma__AdvogadoClient<$Result.GetResult<Prisma.$AdvogadoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Advogado that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvogadoFindFirstOrThrowArgs} args - Arguments to find a Advogado
     * @example
     * // Get one Advogado
     * const advogado = await prisma.advogado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdvogadoFindFirstOrThrowArgs>(args?: SelectSubset<T, AdvogadoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdvogadoClient<$Result.GetResult<Prisma.$AdvogadoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Advogados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvogadoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Advogados
     * const advogados = await prisma.advogado.findMany()
     * 
     * // Get first 10 Advogados
     * const advogados = await prisma.advogado.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const advogadoWithIdOnly = await prisma.advogado.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdvogadoFindManyArgs>(args?: SelectSubset<T, AdvogadoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdvogadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Advogado.
     * @param {AdvogadoCreateArgs} args - Arguments to create a Advogado.
     * @example
     * // Create one Advogado
     * const Advogado = await prisma.advogado.create({
     *   data: {
     *     // ... data to create a Advogado
     *   }
     * })
     * 
     */
    create<T extends AdvogadoCreateArgs>(args: SelectSubset<T, AdvogadoCreateArgs<ExtArgs>>): Prisma__AdvogadoClient<$Result.GetResult<Prisma.$AdvogadoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Advogados.
     * @param {AdvogadoCreateManyArgs} args - Arguments to create many Advogados.
     * @example
     * // Create many Advogados
     * const advogado = await prisma.advogado.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdvogadoCreateManyArgs>(args?: SelectSubset<T, AdvogadoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Advogados and returns the data saved in the database.
     * @param {AdvogadoCreateManyAndReturnArgs} args - Arguments to create many Advogados.
     * @example
     * // Create many Advogados
     * const advogado = await prisma.advogado.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Advogados and only return the `id`
     * const advogadoWithIdOnly = await prisma.advogado.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdvogadoCreateManyAndReturnArgs>(args?: SelectSubset<T, AdvogadoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdvogadoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Advogado.
     * @param {AdvogadoDeleteArgs} args - Arguments to delete one Advogado.
     * @example
     * // Delete one Advogado
     * const Advogado = await prisma.advogado.delete({
     *   where: {
     *     // ... filter to delete one Advogado
     *   }
     * })
     * 
     */
    delete<T extends AdvogadoDeleteArgs>(args: SelectSubset<T, AdvogadoDeleteArgs<ExtArgs>>): Prisma__AdvogadoClient<$Result.GetResult<Prisma.$AdvogadoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Advogado.
     * @param {AdvogadoUpdateArgs} args - Arguments to update one Advogado.
     * @example
     * // Update one Advogado
     * const advogado = await prisma.advogado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdvogadoUpdateArgs>(args: SelectSubset<T, AdvogadoUpdateArgs<ExtArgs>>): Prisma__AdvogadoClient<$Result.GetResult<Prisma.$AdvogadoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Advogados.
     * @param {AdvogadoDeleteManyArgs} args - Arguments to filter Advogados to delete.
     * @example
     * // Delete a few Advogados
     * const { count } = await prisma.advogado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdvogadoDeleteManyArgs>(args?: SelectSubset<T, AdvogadoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Advogados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvogadoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Advogados
     * const advogado = await prisma.advogado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdvogadoUpdateManyArgs>(args: SelectSubset<T, AdvogadoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Advogados and returns the data updated in the database.
     * @param {AdvogadoUpdateManyAndReturnArgs} args - Arguments to update many Advogados.
     * @example
     * // Update many Advogados
     * const advogado = await prisma.advogado.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Advogados and only return the `id`
     * const advogadoWithIdOnly = await prisma.advogado.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdvogadoUpdateManyAndReturnArgs>(args: SelectSubset<T, AdvogadoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdvogadoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Advogado.
     * @param {AdvogadoUpsertArgs} args - Arguments to update or create a Advogado.
     * @example
     * // Update or create a Advogado
     * const advogado = await prisma.advogado.upsert({
     *   create: {
     *     // ... data to create a Advogado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Advogado we want to update
     *   }
     * })
     */
    upsert<T extends AdvogadoUpsertArgs>(args: SelectSubset<T, AdvogadoUpsertArgs<ExtArgs>>): Prisma__AdvogadoClient<$Result.GetResult<Prisma.$AdvogadoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Advogados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvogadoCountArgs} args - Arguments to filter Advogados to count.
     * @example
     * // Count the number of Advogados
     * const count = await prisma.advogado.count({
     *   where: {
     *     // ... the filter for the Advogados we want to count
     *   }
     * })
    **/
    count<T extends AdvogadoCountArgs>(
      args?: Subset<T, AdvogadoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdvogadoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Advogado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvogadoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdvogadoAggregateArgs>(args: Subset<T, AdvogadoAggregateArgs>): Prisma.PrismaPromise<GetAdvogadoAggregateType<T>>

    /**
     * Group by Advogado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvogadoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdvogadoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdvogadoGroupByArgs['orderBy'] }
        : { orderBy?: AdvogadoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdvogadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdvogadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Advogado model
   */
  readonly fields: AdvogadoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Advogado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdvogadoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    googleAuth<T extends Advogado$googleAuthArgs<ExtArgs> = {}>(args?: Subset<T, Advogado$googleAuthArgs<ExtArgs>>): Prisma__GoogleAuthClient<$Result.GetResult<Prisma.$GoogleAuthPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    intimacoes<T extends Advogado$intimacoesArgs<ExtArgs> = {}>(args?: Subset<T, Advogado$intimacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntimacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    processos<T extends Advogado$processosArgs<ExtArgs> = {}>(args?: Subset<T, Advogado$processosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Advogado model
   */
  interface AdvogadoFieldRefs {
    readonly id: FieldRef<"Advogado", 'String'>
    readonly nome: FieldRef<"Advogado", 'String'>
    readonly oab: FieldRef<"Advogado", 'String'>
    readonly telefone: FieldRef<"Advogado", 'String'>
    readonly ativo: FieldRef<"Advogado", 'Boolean'>
    readonly createdAt: FieldRef<"Advogado", 'DateTime'>
    readonly updatedAt: FieldRef<"Advogado", 'DateTime'>
    readonly email: FieldRef<"Advogado", 'String'>
    readonly googleCalendarId: FieldRef<"Advogado", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Advogado findUnique
   */
  export type AdvogadoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advogado
     */
    select?: AdvogadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advogado
     */
    omit?: AdvogadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvogadoInclude<ExtArgs> | null
    /**
     * Filter, which Advogado to fetch.
     */
    where: AdvogadoWhereUniqueInput
  }

  /**
   * Advogado findUniqueOrThrow
   */
  export type AdvogadoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advogado
     */
    select?: AdvogadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advogado
     */
    omit?: AdvogadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvogadoInclude<ExtArgs> | null
    /**
     * Filter, which Advogado to fetch.
     */
    where: AdvogadoWhereUniqueInput
  }

  /**
   * Advogado findFirst
   */
  export type AdvogadoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advogado
     */
    select?: AdvogadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advogado
     */
    omit?: AdvogadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvogadoInclude<ExtArgs> | null
    /**
     * Filter, which Advogado to fetch.
     */
    where?: AdvogadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Advogados to fetch.
     */
    orderBy?: AdvogadoOrderByWithRelationInput | AdvogadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Advogados.
     */
    cursor?: AdvogadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Advogados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Advogados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Advogados.
     */
    distinct?: AdvogadoScalarFieldEnum | AdvogadoScalarFieldEnum[]
  }

  /**
   * Advogado findFirstOrThrow
   */
  export type AdvogadoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advogado
     */
    select?: AdvogadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advogado
     */
    omit?: AdvogadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvogadoInclude<ExtArgs> | null
    /**
     * Filter, which Advogado to fetch.
     */
    where?: AdvogadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Advogados to fetch.
     */
    orderBy?: AdvogadoOrderByWithRelationInput | AdvogadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Advogados.
     */
    cursor?: AdvogadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Advogados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Advogados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Advogados.
     */
    distinct?: AdvogadoScalarFieldEnum | AdvogadoScalarFieldEnum[]
  }

  /**
   * Advogado findMany
   */
  export type AdvogadoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advogado
     */
    select?: AdvogadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advogado
     */
    omit?: AdvogadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvogadoInclude<ExtArgs> | null
    /**
     * Filter, which Advogados to fetch.
     */
    where?: AdvogadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Advogados to fetch.
     */
    orderBy?: AdvogadoOrderByWithRelationInput | AdvogadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Advogados.
     */
    cursor?: AdvogadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Advogados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Advogados.
     */
    skip?: number
    distinct?: AdvogadoScalarFieldEnum | AdvogadoScalarFieldEnum[]
  }

  /**
   * Advogado create
   */
  export type AdvogadoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advogado
     */
    select?: AdvogadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advogado
     */
    omit?: AdvogadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvogadoInclude<ExtArgs> | null
    /**
     * The data needed to create a Advogado.
     */
    data: XOR<AdvogadoCreateInput, AdvogadoUncheckedCreateInput>
  }

  /**
   * Advogado createMany
   */
  export type AdvogadoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Advogados.
     */
    data: AdvogadoCreateManyInput | AdvogadoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Advogado createManyAndReturn
   */
  export type AdvogadoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advogado
     */
    select?: AdvogadoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Advogado
     */
    omit?: AdvogadoOmit<ExtArgs> | null
    /**
     * The data used to create many Advogados.
     */
    data: AdvogadoCreateManyInput | AdvogadoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Advogado update
   */
  export type AdvogadoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advogado
     */
    select?: AdvogadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advogado
     */
    omit?: AdvogadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvogadoInclude<ExtArgs> | null
    /**
     * The data needed to update a Advogado.
     */
    data: XOR<AdvogadoUpdateInput, AdvogadoUncheckedUpdateInput>
    /**
     * Choose, which Advogado to update.
     */
    where: AdvogadoWhereUniqueInput
  }

  /**
   * Advogado updateMany
   */
  export type AdvogadoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Advogados.
     */
    data: XOR<AdvogadoUpdateManyMutationInput, AdvogadoUncheckedUpdateManyInput>
    /**
     * Filter which Advogados to update
     */
    where?: AdvogadoWhereInput
    /**
     * Limit how many Advogados to update.
     */
    limit?: number
  }

  /**
   * Advogado updateManyAndReturn
   */
  export type AdvogadoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advogado
     */
    select?: AdvogadoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Advogado
     */
    omit?: AdvogadoOmit<ExtArgs> | null
    /**
     * The data used to update Advogados.
     */
    data: XOR<AdvogadoUpdateManyMutationInput, AdvogadoUncheckedUpdateManyInput>
    /**
     * Filter which Advogados to update
     */
    where?: AdvogadoWhereInput
    /**
     * Limit how many Advogados to update.
     */
    limit?: number
  }

  /**
   * Advogado upsert
   */
  export type AdvogadoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advogado
     */
    select?: AdvogadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advogado
     */
    omit?: AdvogadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvogadoInclude<ExtArgs> | null
    /**
     * The filter to search for the Advogado to update in case it exists.
     */
    where: AdvogadoWhereUniqueInput
    /**
     * In case the Advogado found by the `where` argument doesn't exist, create a new Advogado with this data.
     */
    create: XOR<AdvogadoCreateInput, AdvogadoUncheckedCreateInput>
    /**
     * In case the Advogado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdvogadoUpdateInput, AdvogadoUncheckedUpdateInput>
  }

  /**
   * Advogado delete
   */
  export type AdvogadoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advogado
     */
    select?: AdvogadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advogado
     */
    omit?: AdvogadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvogadoInclude<ExtArgs> | null
    /**
     * Filter which Advogado to delete.
     */
    where: AdvogadoWhereUniqueInput
  }

  /**
   * Advogado deleteMany
   */
  export type AdvogadoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Advogados to delete
     */
    where?: AdvogadoWhereInput
    /**
     * Limit how many Advogados to delete.
     */
    limit?: number
  }

  /**
   * Advogado.googleAuth
   */
  export type Advogado$googleAuthArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleAuth
     */
    select?: GoogleAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleAuth
     */
    omit?: GoogleAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleAuthInclude<ExtArgs> | null
    where?: GoogleAuthWhereInput
  }

  /**
   * Advogado.intimacoes
   */
  export type Advogado$intimacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Intimacao
     */
    select?: IntimacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Intimacao
     */
    omit?: IntimacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntimacaoInclude<ExtArgs> | null
    where?: IntimacaoWhereInput
    orderBy?: IntimacaoOrderByWithRelationInput | IntimacaoOrderByWithRelationInput[]
    cursor?: IntimacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IntimacaoScalarFieldEnum | IntimacaoScalarFieldEnum[]
  }

  /**
   * Advogado.processos
   */
  export type Advogado$processosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Processo
     */
    select?: ProcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Processo
     */
    omit?: ProcessoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessoInclude<ExtArgs> | null
    where?: ProcessoWhereInput
    orderBy?: ProcessoOrderByWithRelationInput | ProcessoOrderByWithRelationInput[]
    cursor?: ProcessoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProcessoScalarFieldEnum | ProcessoScalarFieldEnum[]
  }

  /**
   * Advogado without action
   */
  export type AdvogadoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advogado
     */
    select?: AdvogadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advogado
     */
    omit?: AdvogadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvogadoInclude<ExtArgs> | null
  }


  /**
   * Model Processo
   */

  export type AggregateProcesso = {
    _count: ProcessoCountAggregateOutputType | null
    _min: ProcessoMinAggregateOutputType | null
    _max: ProcessoMaxAggregateOutputType | null
  }

  export type ProcessoMinAggregateOutputType = {
    id: string | null
    numeroProcesso: string | null
    vara: string | null
    tribunal: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProcessoMaxAggregateOutputType = {
    id: string | null
    numeroProcesso: string | null
    vara: string | null
    tribunal: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProcessoCountAggregateOutputType = {
    id: number
    numeroProcesso: number
    vara: number
    tribunal: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProcessoMinAggregateInputType = {
    id?: true
    numeroProcesso?: true
    vara?: true
    tribunal?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProcessoMaxAggregateInputType = {
    id?: true
    numeroProcesso?: true
    vara?: true
    tribunal?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProcessoCountAggregateInputType = {
    id?: true
    numeroProcesso?: true
    vara?: true
    tribunal?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProcessoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Processo to aggregate.
     */
    where?: ProcessoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Processos to fetch.
     */
    orderBy?: ProcessoOrderByWithRelationInput | ProcessoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProcessoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Processos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Processos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Processos
    **/
    _count?: true | ProcessoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProcessoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProcessoMaxAggregateInputType
  }

  export type GetProcessoAggregateType<T extends ProcessoAggregateArgs> = {
        [P in keyof T & keyof AggregateProcesso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProcesso[P]>
      : GetScalarType<T[P], AggregateProcesso[P]>
  }




  export type ProcessoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcessoWhereInput
    orderBy?: ProcessoOrderByWithAggregationInput | ProcessoOrderByWithAggregationInput[]
    by: ProcessoScalarFieldEnum[] | ProcessoScalarFieldEnum
    having?: ProcessoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProcessoCountAggregateInputType | true
    _min?: ProcessoMinAggregateInputType
    _max?: ProcessoMaxAggregateInputType
  }

  export type ProcessoGroupByOutputType = {
    id: string
    numeroProcesso: string
    vara: string
    tribunal: string
    status: string
    createdAt: Date
    updatedAt: Date
    _count: ProcessoCountAggregateOutputType | null
    _min: ProcessoMinAggregateOutputType | null
    _max: ProcessoMaxAggregateOutputType | null
  }

  type GetProcessoGroupByPayload<T extends ProcessoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProcessoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProcessoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProcessoGroupByOutputType[P]>
            : GetScalarType<T[P], ProcessoGroupByOutputType[P]>
        }
      >
    >


  export type ProcessoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numeroProcesso?: boolean
    vara?: boolean
    tribunal?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    intimacoes?: boolean | Processo$intimacoesArgs<ExtArgs>
    advogados?: boolean | Processo$advogadosArgs<ExtArgs>
    _count?: boolean | ProcessoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["processo"]>

  export type ProcessoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numeroProcesso?: boolean
    vara?: boolean
    tribunal?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["processo"]>

  export type ProcessoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numeroProcesso?: boolean
    vara?: boolean
    tribunal?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["processo"]>

  export type ProcessoSelectScalar = {
    id?: boolean
    numeroProcesso?: boolean
    vara?: boolean
    tribunal?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProcessoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "numeroProcesso" | "vara" | "tribunal" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["processo"]>
  export type ProcessoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    intimacoes?: boolean | Processo$intimacoesArgs<ExtArgs>
    advogados?: boolean | Processo$advogadosArgs<ExtArgs>
    _count?: boolean | ProcessoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProcessoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProcessoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProcessoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Processo"
    objects: {
      intimacoes: Prisma.$IntimacaoPayload<ExtArgs>[]
      advogados: Prisma.$AdvogadoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      numeroProcesso: string
      vara: string
      tribunal: string
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["processo"]>
    composites: {}
  }

  type ProcessoGetPayload<S extends boolean | null | undefined | ProcessoDefaultArgs> = $Result.GetResult<Prisma.$ProcessoPayload, S>

  type ProcessoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProcessoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProcessoCountAggregateInputType | true
    }

  export interface ProcessoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Processo'], meta: { name: 'Processo' } }
    /**
     * Find zero or one Processo that matches the filter.
     * @param {ProcessoFindUniqueArgs} args - Arguments to find a Processo
     * @example
     * // Get one Processo
     * const processo = await prisma.processo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProcessoFindUniqueArgs>(args: SelectSubset<T, ProcessoFindUniqueArgs<ExtArgs>>): Prisma__ProcessoClient<$Result.GetResult<Prisma.$ProcessoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Processo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProcessoFindUniqueOrThrowArgs} args - Arguments to find a Processo
     * @example
     * // Get one Processo
     * const processo = await prisma.processo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProcessoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProcessoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProcessoClient<$Result.GetResult<Prisma.$ProcessoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Processo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessoFindFirstArgs} args - Arguments to find a Processo
     * @example
     * // Get one Processo
     * const processo = await prisma.processo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProcessoFindFirstArgs>(args?: SelectSubset<T, ProcessoFindFirstArgs<ExtArgs>>): Prisma__ProcessoClient<$Result.GetResult<Prisma.$ProcessoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Processo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessoFindFirstOrThrowArgs} args - Arguments to find a Processo
     * @example
     * // Get one Processo
     * const processo = await prisma.processo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProcessoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProcessoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProcessoClient<$Result.GetResult<Prisma.$ProcessoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Processos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Processos
     * const processos = await prisma.processo.findMany()
     * 
     * // Get first 10 Processos
     * const processos = await prisma.processo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const processoWithIdOnly = await prisma.processo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProcessoFindManyArgs>(args?: SelectSubset<T, ProcessoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Processo.
     * @param {ProcessoCreateArgs} args - Arguments to create a Processo.
     * @example
     * // Create one Processo
     * const Processo = await prisma.processo.create({
     *   data: {
     *     // ... data to create a Processo
     *   }
     * })
     * 
     */
    create<T extends ProcessoCreateArgs>(args: SelectSubset<T, ProcessoCreateArgs<ExtArgs>>): Prisma__ProcessoClient<$Result.GetResult<Prisma.$ProcessoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Processos.
     * @param {ProcessoCreateManyArgs} args - Arguments to create many Processos.
     * @example
     * // Create many Processos
     * const processo = await prisma.processo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProcessoCreateManyArgs>(args?: SelectSubset<T, ProcessoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Processos and returns the data saved in the database.
     * @param {ProcessoCreateManyAndReturnArgs} args - Arguments to create many Processos.
     * @example
     * // Create many Processos
     * const processo = await prisma.processo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Processos and only return the `id`
     * const processoWithIdOnly = await prisma.processo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProcessoCreateManyAndReturnArgs>(args?: SelectSubset<T, ProcessoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Processo.
     * @param {ProcessoDeleteArgs} args - Arguments to delete one Processo.
     * @example
     * // Delete one Processo
     * const Processo = await prisma.processo.delete({
     *   where: {
     *     // ... filter to delete one Processo
     *   }
     * })
     * 
     */
    delete<T extends ProcessoDeleteArgs>(args: SelectSubset<T, ProcessoDeleteArgs<ExtArgs>>): Prisma__ProcessoClient<$Result.GetResult<Prisma.$ProcessoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Processo.
     * @param {ProcessoUpdateArgs} args - Arguments to update one Processo.
     * @example
     * // Update one Processo
     * const processo = await prisma.processo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProcessoUpdateArgs>(args: SelectSubset<T, ProcessoUpdateArgs<ExtArgs>>): Prisma__ProcessoClient<$Result.GetResult<Prisma.$ProcessoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Processos.
     * @param {ProcessoDeleteManyArgs} args - Arguments to filter Processos to delete.
     * @example
     * // Delete a few Processos
     * const { count } = await prisma.processo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProcessoDeleteManyArgs>(args?: SelectSubset<T, ProcessoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Processos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Processos
     * const processo = await prisma.processo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProcessoUpdateManyArgs>(args: SelectSubset<T, ProcessoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Processos and returns the data updated in the database.
     * @param {ProcessoUpdateManyAndReturnArgs} args - Arguments to update many Processos.
     * @example
     * // Update many Processos
     * const processo = await prisma.processo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Processos and only return the `id`
     * const processoWithIdOnly = await prisma.processo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProcessoUpdateManyAndReturnArgs>(args: SelectSubset<T, ProcessoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Processo.
     * @param {ProcessoUpsertArgs} args - Arguments to update or create a Processo.
     * @example
     * // Update or create a Processo
     * const processo = await prisma.processo.upsert({
     *   create: {
     *     // ... data to create a Processo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Processo we want to update
     *   }
     * })
     */
    upsert<T extends ProcessoUpsertArgs>(args: SelectSubset<T, ProcessoUpsertArgs<ExtArgs>>): Prisma__ProcessoClient<$Result.GetResult<Prisma.$ProcessoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Processos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessoCountArgs} args - Arguments to filter Processos to count.
     * @example
     * // Count the number of Processos
     * const count = await prisma.processo.count({
     *   where: {
     *     // ... the filter for the Processos we want to count
     *   }
     * })
    **/
    count<T extends ProcessoCountArgs>(
      args?: Subset<T, ProcessoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProcessoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Processo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProcessoAggregateArgs>(args: Subset<T, ProcessoAggregateArgs>): Prisma.PrismaPromise<GetProcessoAggregateType<T>>

    /**
     * Group by Processo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProcessoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProcessoGroupByArgs['orderBy'] }
        : { orderBy?: ProcessoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProcessoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProcessoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Processo model
   */
  readonly fields: ProcessoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Processo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProcessoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    intimacoes<T extends Processo$intimacoesArgs<ExtArgs> = {}>(args?: Subset<T, Processo$intimacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntimacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    advogados<T extends Processo$advogadosArgs<ExtArgs> = {}>(args?: Subset<T, Processo$advogadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdvogadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Processo model
   */
  interface ProcessoFieldRefs {
    readonly id: FieldRef<"Processo", 'String'>
    readonly numeroProcesso: FieldRef<"Processo", 'String'>
    readonly vara: FieldRef<"Processo", 'String'>
    readonly tribunal: FieldRef<"Processo", 'String'>
    readonly status: FieldRef<"Processo", 'String'>
    readonly createdAt: FieldRef<"Processo", 'DateTime'>
    readonly updatedAt: FieldRef<"Processo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Processo findUnique
   */
  export type ProcessoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Processo
     */
    select?: ProcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Processo
     */
    omit?: ProcessoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessoInclude<ExtArgs> | null
    /**
     * Filter, which Processo to fetch.
     */
    where: ProcessoWhereUniqueInput
  }

  /**
   * Processo findUniqueOrThrow
   */
  export type ProcessoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Processo
     */
    select?: ProcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Processo
     */
    omit?: ProcessoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessoInclude<ExtArgs> | null
    /**
     * Filter, which Processo to fetch.
     */
    where: ProcessoWhereUniqueInput
  }

  /**
   * Processo findFirst
   */
  export type ProcessoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Processo
     */
    select?: ProcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Processo
     */
    omit?: ProcessoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessoInclude<ExtArgs> | null
    /**
     * Filter, which Processo to fetch.
     */
    where?: ProcessoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Processos to fetch.
     */
    orderBy?: ProcessoOrderByWithRelationInput | ProcessoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Processos.
     */
    cursor?: ProcessoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Processos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Processos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Processos.
     */
    distinct?: ProcessoScalarFieldEnum | ProcessoScalarFieldEnum[]
  }

  /**
   * Processo findFirstOrThrow
   */
  export type ProcessoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Processo
     */
    select?: ProcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Processo
     */
    omit?: ProcessoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessoInclude<ExtArgs> | null
    /**
     * Filter, which Processo to fetch.
     */
    where?: ProcessoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Processos to fetch.
     */
    orderBy?: ProcessoOrderByWithRelationInput | ProcessoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Processos.
     */
    cursor?: ProcessoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Processos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Processos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Processos.
     */
    distinct?: ProcessoScalarFieldEnum | ProcessoScalarFieldEnum[]
  }

  /**
   * Processo findMany
   */
  export type ProcessoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Processo
     */
    select?: ProcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Processo
     */
    omit?: ProcessoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessoInclude<ExtArgs> | null
    /**
     * Filter, which Processos to fetch.
     */
    where?: ProcessoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Processos to fetch.
     */
    orderBy?: ProcessoOrderByWithRelationInput | ProcessoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Processos.
     */
    cursor?: ProcessoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Processos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Processos.
     */
    skip?: number
    distinct?: ProcessoScalarFieldEnum | ProcessoScalarFieldEnum[]
  }

  /**
   * Processo create
   */
  export type ProcessoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Processo
     */
    select?: ProcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Processo
     */
    omit?: ProcessoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessoInclude<ExtArgs> | null
    /**
     * The data needed to create a Processo.
     */
    data: XOR<ProcessoCreateInput, ProcessoUncheckedCreateInput>
  }

  /**
   * Processo createMany
   */
  export type ProcessoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Processos.
     */
    data: ProcessoCreateManyInput | ProcessoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Processo createManyAndReturn
   */
  export type ProcessoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Processo
     */
    select?: ProcessoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Processo
     */
    omit?: ProcessoOmit<ExtArgs> | null
    /**
     * The data used to create many Processos.
     */
    data: ProcessoCreateManyInput | ProcessoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Processo update
   */
  export type ProcessoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Processo
     */
    select?: ProcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Processo
     */
    omit?: ProcessoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessoInclude<ExtArgs> | null
    /**
     * The data needed to update a Processo.
     */
    data: XOR<ProcessoUpdateInput, ProcessoUncheckedUpdateInput>
    /**
     * Choose, which Processo to update.
     */
    where: ProcessoWhereUniqueInput
  }

  /**
   * Processo updateMany
   */
  export type ProcessoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Processos.
     */
    data: XOR<ProcessoUpdateManyMutationInput, ProcessoUncheckedUpdateManyInput>
    /**
     * Filter which Processos to update
     */
    where?: ProcessoWhereInput
    /**
     * Limit how many Processos to update.
     */
    limit?: number
  }

  /**
   * Processo updateManyAndReturn
   */
  export type ProcessoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Processo
     */
    select?: ProcessoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Processo
     */
    omit?: ProcessoOmit<ExtArgs> | null
    /**
     * The data used to update Processos.
     */
    data: XOR<ProcessoUpdateManyMutationInput, ProcessoUncheckedUpdateManyInput>
    /**
     * Filter which Processos to update
     */
    where?: ProcessoWhereInput
    /**
     * Limit how many Processos to update.
     */
    limit?: number
  }

  /**
   * Processo upsert
   */
  export type ProcessoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Processo
     */
    select?: ProcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Processo
     */
    omit?: ProcessoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessoInclude<ExtArgs> | null
    /**
     * The filter to search for the Processo to update in case it exists.
     */
    where: ProcessoWhereUniqueInput
    /**
     * In case the Processo found by the `where` argument doesn't exist, create a new Processo with this data.
     */
    create: XOR<ProcessoCreateInput, ProcessoUncheckedCreateInput>
    /**
     * In case the Processo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProcessoUpdateInput, ProcessoUncheckedUpdateInput>
  }

  /**
   * Processo delete
   */
  export type ProcessoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Processo
     */
    select?: ProcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Processo
     */
    omit?: ProcessoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessoInclude<ExtArgs> | null
    /**
     * Filter which Processo to delete.
     */
    where: ProcessoWhereUniqueInput
  }

  /**
   * Processo deleteMany
   */
  export type ProcessoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Processos to delete
     */
    where?: ProcessoWhereInput
    /**
     * Limit how many Processos to delete.
     */
    limit?: number
  }

  /**
   * Processo.intimacoes
   */
  export type Processo$intimacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Intimacao
     */
    select?: IntimacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Intimacao
     */
    omit?: IntimacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntimacaoInclude<ExtArgs> | null
    where?: IntimacaoWhereInput
    orderBy?: IntimacaoOrderByWithRelationInput | IntimacaoOrderByWithRelationInput[]
    cursor?: IntimacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IntimacaoScalarFieldEnum | IntimacaoScalarFieldEnum[]
  }

  /**
   * Processo.advogados
   */
  export type Processo$advogadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advogado
     */
    select?: AdvogadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advogado
     */
    omit?: AdvogadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvogadoInclude<ExtArgs> | null
    where?: AdvogadoWhereInput
    orderBy?: AdvogadoOrderByWithRelationInput | AdvogadoOrderByWithRelationInput[]
    cursor?: AdvogadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdvogadoScalarFieldEnum | AdvogadoScalarFieldEnum[]
  }

  /**
   * Processo without action
   */
  export type ProcessoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Processo
     */
    select?: ProcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Processo
     */
    omit?: ProcessoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessoInclude<ExtArgs> | null
  }


  /**
   * Model Intimacao
   */

  export type AggregateIntimacao = {
    _count: IntimacaoCountAggregateOutputType | null
    _avg: IntimacaoAvgAggregateOutputType | null
    _sum: IntimacaoSumAggregateOutputType | null
    _min: IntimacaoMinAggregateOutputType | null
    _max: IntimacaoMaxAggregateOutputType | null
  }

  export type IntimacaoAvgAggregateOutputType = {
    prazo: number | null
  }

  export type IntimacaoSumAggregateOutputType = {
    prazo: number | null
  }

  export type IntimacaoMinAggregateOutputType = {
    id: string | null
    processoId: string | null
    advogadoId: string | null
    dataPublicacao: Date | null
    prazo: number | null
    dataLimite: Date | null
    conteudo: string | null
    resumoIA: string | null
    status: string | null
    googleEventId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IntimacaoMaxAggregateOutputType = {
    id: string | null
    processoId: string | null
    advogadoId: string | null
    dataPublicacao: Date | null
    prazo: number | null
    dataLimite: Date | null
    conteudo: string | null
    resumoIA: string | null
    status: string | null
    googleEventId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IntimacaoCountAggregateOutputType = {
    id: number
    processoId: number
    advogadoId: number
    dataPublicacao: number
    prazo: number
    dataLimite: number
    conteudo: number
    resumoIA: number
    status: number
    googleEventId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type IntimacaoAvgAggregateInputType = {
    prazo?: true
  }

  export type IntimacaoSumAggregateInputType = {
    prazo?: true
  }

  export type IntimacaoMinAggregateInputType = {
    id?: true
    processoId?: true
    advogadoId?: true
    dataPublicacao?: true
    prazo?: true
    dataLimite?: true
    conteudo?: true
    resumoIA?: true
    status?: true
    googleEventId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IntimacaoMaxAggregateInputType = {
    id?: true
    processoId?: true
    advogadoId?: true
    dataPublicacao?: true
    prazo?: true
    dataLimite?: true
    conteudo?: true
    resumoIA?: true
    status?: true
    googleEventId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IntimacaoCountAggregateInputType = {
    id?: true
    processoId?: true
    advogadoId?: true
    dataPublicacao?: true
    prazo?: true
    dataLimite?: true
    conteudo?: true
    resumoIA?: true
    status?: true
    googleEventId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type IntimacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Intimacao to aggregate.
     */
    where?: IntimacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Intimacaos to fetch.
     */
    orderBy?: IntimacaoOrderByWithRelationInput | IntimacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IntimacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Intimacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Intimacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Intimacaos
    **/
    _count?: true | IntimacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IntimacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IntimacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IntimacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IntimacaoMaxAggregateInputType
  }

  export type GetIntimacaoAggregateType<T extends IntimacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateIntimacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIntimacao[P]>
      : GetScalarType<T[P], AggregateIntimacao[P]>
  }




  export type IntimacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IntimacaoWhereInput
    orderBy?: IntimacaoOrderByWithAggregationInput | IntimacaoOrderByWithAggregationInput[]
    by: IntimacaoScalarFieldEnum[] | IntimacaoScalarFieldEnum
    having?: IntimacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IntimacaoCountAggregateInputType | true
    _avg?: IntimacaoAvgAggregateInputType
    _sum?: IntimacaoSumAggregateInputType
    _min?: IntimacaoMinAggregateInputType
    _max?: IntimacaoMaxAggregateInputType
  }

  export type IntimacaoGroupByOutputType = {
    id: string
    processoId: string
    advogadoId: string
    dataPublicacao: Date
    prazo: number
    dataLimite: Date
    conteudo: string
    resumoIA: string | null
    status: string
    googleEventId: string | null
    createdAt: Date
    updatedAt: Date
    _count: IntimacaoCountAggregateOutputType | null
    _avg: IntimacaoAvgAggregateOutputType | null
    _sum: IntimacaoSumAggregateOutputType | null
    _min: IntimacaoMinAggregateOutputType | null
    _max: IntimacaoMaxAggregateOutputType | null
  }

  type GetIntimacaoGroupByPayload<T extends IntimacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IntimacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IntimacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IntimacaoGroupByOutputType[P]>
            : GetScalarType<T[P], IntimacaoGroupByOutputType[P]>
        }
      >
    >


  export type IntimacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    processoId?: boolean
    advogadoId?: boolean
    dataPublicacao?: boolean
    prazo?: boolean
    dataLimite?: boolean
    conteudo?: boolean
    resumoIA?: boolean
    status?: boolean
    googleEventId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    processo?: boolean | ProcessoDefaultArgs<ExtArgs>
    advogado?: boolean | AdvogadoDefaultArgs<ExtArgs>
    Notificacao?: boolean | Intimacao$NotificacaoArgs<ExtArgs>
    _count?: boolean | IntimacaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["intimacao"]>

  export type IntimacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    processoId?: boolean
    advogadoId?: boolean
    dataPublicacao?: boolean
    prazo?: boolean
    dataLimite?: boolean
    conteudo?: boolean
    resumoIA?: boolean
    status?: boolean
    googleEventId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    processo?: boolean | ProcessoDefaultArgs<ExtArgs>
    advogado?: boolean | AdvogadoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["intimacao"]>

  export type IntimacaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    processoId?: boolean
    advogadoId?: boolean
    dataPublicacao?: boolean
    prazo?: boolean
    dataLimite?: boolean
    conteudo?: boolean
    resumoIA?: boolean
    status?: boolean
    googleEventId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    processo?: boolean | ProcessoDefaultArgs<ExtArgs>
    advogado?: boolean | AdvogadoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["intimacao"]>

  export type IntimacaoSelectScalar = {
    id?: boolean
    processoId?: boolean
    advogadoId?: boolean
    dataPublicacao?: boolean
    prazo?: boolean
    dataLimite?: boolean
    conteudo?: boolean
    resumoIA?: boolean
    status?: boolean
    googleEventId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type IntimacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "processoId" | "advogadoId" | "dataPublicacao" | "prazo" | "dataLimite" | "conteudo" | "resumoIA" | "status" | "googleEventId" | "createdAt" | "updatedAt", ExtArgs["result"]["intimacao"]>
  export type IntimacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    processo?: boolean | ProcessoDefaultArgs<ExtArgs>
    advogado?: boolean | AdvogadoDefaultArgs<ExtArgs>
    Notificacao?: boolean | Intimacao$NotificacaoArgs<ExtArgs>
    _count?: boolean | IntimacaoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IntimacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    processo?: boolean | ProcessoDefaultArgs<ExtArgs>
    advogado?: boolean | AdvogadoDefaultArgs<ExtArgs>
  }
  export type IntimacaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    processo?: boolean | ProcessoDefaultArgs<ExtArgs>
    advogado?: boolean | AdvogadoDefaultArgs<ExtArgs>
  }

  export type $IntimacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Intimacao"
    objects: {
      processo: Prisma.$ProcessoPayload<ExtArgs>
      advogado: Prisma.$AdvogadoPayload<ExtArgs>
      Notificacao: Prisma.$NotificacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      processoId: string
      advogadoId: string
      dataPublicacao: Date
      prazo: number
      dataLimite: Date
      conteudo: string
      resumoIA: string | null
      status: string
      googleEventId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["intimacao"]>
    composites: {}
  }

  type IntimacaoGetPayload<S extends boolean | null | undefined | IntimacaoDefaultArgs> = $Result.GetResult<Prisma.$IntimacaoPayload, S>

  type IntimacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IntimacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IntimacaoCountAggregateInputType | true
    }

  export interface IntimacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Intimacao'], meta: { name: 'Intimacao' } }
    /**
     * Find zero or one Intimacao that matches the filter.
     * @param {IntimacaoFindUniqueArgs} args - Arguments to find a Intimacao
     * @example
     * // Get one Intimacao
     * const intimacao = await prisma.intimacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IntimacaoFindUniqueArgs>(args: SelectSubset<T, IntimacaoFindUniqueArgs<ExtArgs>>): Prisma__IntimacaoClient<$Result.GetResult<Prisma.$IntimacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Intimacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IntimacaoFindUniqueOrThrowArgs} args - Arguments to find a Intimacao
     * @example
     * // Get one Intimacao
     * const intimacao = await prisma.intimacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IntimacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, IntimacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IntimacaoClient<$Result.GetResult<Prisma.$IntimacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Intimacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntimacaoFindFirstArgs} args - Arguments to find a Intimacao
     * @example
     * // Get one Intimacao
     * const intimacao = await prisma.intimacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IntimacaoFindFirstArgs>(args?: SelectSubset<T, IntimacaoFindFirstArgs<ExtArgs>>): Prisma__IntimacaoClient<$Result.GetResult<Prisma.$IntimacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Intimacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntimacaoFindFirstOrThrowArgs} args - Arguments to find a Intimacao
     * @example
     * // Get one Intimacao
     * const intimacao = await prisma.intimacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IntimacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, IntimacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__IntimacaoClient<$Result.GetResult<Prisma.$IntimacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Intimacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntimacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Intimacaos
     * const intimacaos = await prisma.intimacao.findMany()
     * 
     * // Get first 10 Intimacaos
     * const intimacaos = await prisma.intimacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const intimacaoWithIdOnly = await prisma.intimacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IntimacaoFindManyArgs>(args?: SelectSubset<T, IntimacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntimacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Intimacao.
     * @param {IntimacaoCreateArgs} args - Arguments to create a Intimacao.
     * @example
     * // Create one Intimacao
     * const Intimacao = await prisma.intimacao.create({
     *   data: {
     *     // ... data to create a Intimacao
     *   }
     * })
     * 
     */
    create<T extends IntimacaoCreateArgs>(args: SelectSubset<T, IntimacaoCreateArgs<ExtArgs>>): Prisma__IntimacaoClient<$Result.GetResult<Prisma.$IntimacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Intimacaos.
     * @param {IntimacaoCreateManyArgs} args - Arguments to create many Intimacaos.
     * @example
     * // Create many Intimacaos
     * const intimacao = await prisma.intimacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IntimacaoCreateManyArgs>(args?: SelectSubset<T, IntimacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Intimacaos and returns the data saved in the database.
     * @param {IntimacaoCreateManyAndReturnArgs} args - Arguments to create many Intimacaos.
     * @example
     * // Create many Intimacaos
     * const intimacao = await prisma.intimacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Intimacaos and only return the `id`
     * const intimacaoWithIdOnly = await prisma.intimacao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IntimacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, IntimacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntimacaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Intimacao.
     * @param {IntimacaoDeleteArgs} args - Arguments to delete one Intimacao.
     * @example
     * // Delete one Intimacao
     * const Intimacao = await prisma.intimacao.delete({
     *   where: {
     *     // ... filter to delete one Intimacao
     *   }
     * })
     * 
     */
    delete<T extends IntimacaoDeleteArgs>(args: SelectSubset<T, IntimacaoDeleteArgs<ExtArgs>>): Prisma__IntimacaoClient<$Result.GetResult<Prisma.$IntimacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Intimacao.
     * @param {IntimacaoUpdateArgs} args - Arguments to update one Intimacao.
     * @example
     * // Update one Intimacao
     * const intimacao = await prisma.intimacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IntimacaoUpdateArgs>(args: SelectSubset<T, IntimacaoUpdateArgs<ExtArgs>>): Prisma__IntimacaoClient<$Result.GetResult<Prisma.$IntimacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Intimacaos.
     * @param {IntimacaoDeleteManyArgs} args - Arguments to filter Intimacaos to delete.
     * @example
     * // Delete a few Intimacaos
     * const { count } = await prisma.intimacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IntimacaoDeleteManyArgs>(args?: SelectSubset<T, IntimacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Intimacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntimacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Intimacaos
     * const intimacao = await prisma.intimacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IntimacaoUpdateManyArgs>(args: SelectSubset<T, IntimacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Intimacaos and returns the data updated in the database.
     * @param {IntimacaoUpdateManyAndReturnArgs} args - Arguments to update many Intimacaos.
     * @example
     * // Update many Intimacaos
     * const intimacao = await prisma.intimacao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Intimacaos and only return the `id`
     * const intimacaoWithIdOnly = await prisma.intimacao.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IntimacaoUpdateManyAndReturnArgs>(args: SelectSubset<T, IntimacaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntimacaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Intimacao.
     * @param {IntimacaoUpsertArgs} args - Arguments to update or create a Intimacao.
     * @example
     * // Update or create a Intimacao
     * const intimacao = await prisma.intimacao.upsert({
     *   create: {
     *     // ... data to create a Intimacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Intimacao we want to update
     *   }
     * })
     */
    upsert<T extends IntimacaoUpsertArgs>(args: SelectSubset<T, IntimacaoUpsertArgs<ExtArgs>>): Prisma__IntimacaoClient<$Result.GetResult<Prisma.$IntimacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Intimacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntimacaoCountArgs} args - Arguments to filter Intimacaos to count.
     * @example
     * // Count the number of Intimacaos
     * const count = await prisma.intimacao.count({
     *   where: {
     *     // ... the filter for the Intimacaos we want to count
     *   }
     * })
    **/
    count<T extends IntimacaoCountArgs>(
      args?: Subset<T, IntimacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IntimacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Intimacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntimacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IntimacaoAggregateArgs>(args: Subset<T, IntimacaoAggregateArgs>): Prisma.PrismaPromise<GetIntimacaoAggregateType<T>>

    /**
     * Group by Intimacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntimacaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IntimacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IntimacaoGroupByArgs['orderBy'] }
        : { orderBy?: IntimacaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IntimacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIntimacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Intimacao model
   */
  readonly fields: IntimacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Intimacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IntimacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    processo<T extends ProcessoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProcessoDefaultArgs<ExtArgs>>): Prisma__ProcessoClient<$Result.GetResult<Prisma.$ProcessoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    advogado<T extends AdvogadoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdvogadoDefaultArgs<ExtArgs>>): Prisma__AdvogadoClient<$Result.GetResult<Prisma.$AdvogadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Notificacao<T extends Intimacao$NotificacaoArgs<ExtArgs> = {}>(args?: Subset<T, Intimacao$NotificacaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Intimacao model
   */
  interface IntimacaoFieldRefs {
    readonly id: FieldRef<"Intimacao", 'String'>
    readonly processoId: FieldRef<"Intimacao", 'String'>
    readonly advogadoId: FieldRef<"Intimacao", 'String'>
    readonly dataPublicacao: FieldRef<"Intimacao", 'DateTime'>
    readonly prazo: FieldRef<"Intimacao", 'Int'>
    readonly dataLimite: FieldRef<"Intimacao", 'DateTime'>
    readonly conteudo: FieldRef<"Intimacao", 'String'>
    readonly resumoIA: FieldRef<"Intimacao", 'String'>
    readonly status: FieldRef<"Intimacao", 'String'>
    readonly googleEventId: FieldRef<"Intimacao", 'String'>
    readonly createdAt: FieldRef<"Intimacao", 'DateTime'>
    readonly updatedAt: FieldRef<"Intimacao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Intimacao findUnique
   */
  export type IntimacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Intimacao
     */
    select?: IntimacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Intimacao
     */
    omit?: IntimacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntimacaoInclude<ExtArgs> | null
    /**
     * Filter, which Intimacao to fetch.
     */
    where: IntimacaoWhereUniqueInput
  }

  /**
   * Intimacao findUniqueOrThrow
   */
  export type IntimacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Intimacao
     */
    select?: IntimacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Intimacao
     */
    omit?: IntimacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntimacaoInclude<ExtArgs> | null
    /**
     * Filter, which Intimacao to fetch.
     */
    where: IntimacaoWhereUniqueInput
  }

  /**
   * Intimacao findFirst
   */
  export type IntimacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Intimacao
     */
    select?: IntimacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Intimacao
     */
    omit?: IntimacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntimacaoInclude<ExtArgs> | null
    /**
     * Filter, which Intimacao to fetch.
     */
    where?: IntimacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Intimacaos to fetch.
     */
    orderBy?: IntimacaoOrderByWithRelationInput | IntimacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Intimacaos.
     */
    cursor?: IntimacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Intimacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Intimacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Intimacaos.
     */
    distinct?: IntimacaoScalarFieldEnum | IntimacaoScalarFieldEnum[]
  }

  /**
   * Intimacao findFirstOrThrow
   */
  export type IntimacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Intimacao
     */
    select?: IntimacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Intimacao
     */
    omit?: IntimacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntimacaoInclude<ExtArgs> | null
    /**
     * Filter, which Intimacao to fetch.
     */
    where?: IntimacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Intimacaos to fetch.
     */
    orderBy?: IntimacaoOrderByWithRelationInput | IntimacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Intimacaos.
     */
    cursor?: IntimacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Intimacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Intimacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Intimacaos.
     */
    distinct?: IntimacaoScalarFieldEnum | IntimacaoScalarFieldEnum[]
  }

  /**
   * Intimacao findMany
   */
  export type IntimacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Intimacao
     */
    select?: IntimacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Intimacao
     */
    omit?: IntimacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntimacaoInclude<ExtArgs> | null
    /**
     * Filter, which Intimacaos to fetch.
     */
    where?: IntimacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Intimacaos to fetch.
     */
    orderBy?: IntimacaoOrderByWithRelationInput | IntimacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Intimacaos.
     */
    cursor?: IntimacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Intimacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Intimacaos.
     */
    skip?: number
    distinct?: IntimacaoScalarFieldEnum | IntimacaoScalarFieldEnum[]
  }

  /**
   * Intimacao create
   */
  export type IntimacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Intimacao
     */
    select?: IntimacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Intimacao
     */
    omit?: IntimacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntimacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Intimacao.
     */
    data: XOR<IntimacaoCreateInput, IntimacaoUncheckedCreateInput>
  }

  /**
   * Intimacao createMany
   */
  export type IntimacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Intimacaos.
     */
    data: IntimacaoCreateManyInput | IntimacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Intimacao createManyAndReturn
   */
  export type IntimacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Intimacao
     */
    select?: IntimacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Intimacao
     */
    omit?: IntimacaoOmit<ExtArgs> | null
    /**
     * The data used to create many Intimacaos.
     */
    data: IntimacaoCreateManyInput | IntimacaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntimacaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Intimacao update
   */
  export type IntimacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Intimacao
     */
    select?: IntimacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Intimacao
     */
    omit?: IntimacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntimacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Intimacao.
     */
    data: XOR<IntimacaoUpdateInput, IntimacaoUncheckedUpdateInput>
    /**
     * Choose, which Intimacao to update.
     */
    where: IntimacaoWhereUniqueInput
  }

  /**
   * Intimacao updateMany
   */
  export type IntimacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Intimacaos.
     */
    data: XOR<IntimacaoUpdateManyMutationInput, IntimacaoUncheckedUpdateManyInput>
    /**
     * Filter which Intimacaos to update
     */
    where?: IntimacaoWhereInput
    /**
     * Limit how many Intimacaos to update.
     */
    limit?: number
  }

  /**
   * Intimacao updateManyAndReturn
   */
  export type IntimacaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Intimacao
     */
    select?: IntimacaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Intimacao
     */
    omit?: IntimacaoOmit<ExtArgs> | null
    /**
     * The data used to update Intimacaos.
     */
    data: XOR<IntimacaoUpdateManyMutationInput, IntimacaoUncheckedUpdateManyInput>
    /**
     * Filter which Intimacaos to update
     */
    where?: IntimacaoWhereInput
    /**
     * Limit how many Intimacaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntimacaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Intimacao upsert
   */
  export type IntimacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Intimacao
     */
    select?: IntimacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Intimacao
     */
    omit?: IntimacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntimacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Intimacao to update in case it exists.
     */
    where: IntimacaoWhereUniqueInput
    /**
     * In case the Intimacao found by the `where` argument doesn't exist, create a new Intimacao with this data.
     */
    create: XOR<IntimacaoCreateInput, IntimacaoUncheckedCreateInput>
    /**
     * In case the Intimacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IntimacaoUpdateInput, IntimacaoUncheckedUpdateInput>
  }

  /**
   * Intimacao delete
   */
  export type IntimacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Intimacao
     */
    select?: IntimacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Intimacao
     */
    omit?: IntimacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntimacaoInclude<ExtArgs> | null
    /**
     * Filter which Intimacao to delete.
     */
    where: IntimacaoWhereUniqueInput
  }

  /**
   * Intimacao deleteMany
   */
  export type IntimacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Intimacaos to delete
     */
    where?: IntimacaoWhereInput
    /**
     * Limit how many Intimacaos to delete.
     */
    limit?: number
  }

  /**
   * Intimacao.Notificacao
   */
  export type Intimacao$NotificacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    where?: NotificacaoWhereInput
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    cursor?: NotificacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificacaoScalarFieldEnum | NotificacaoScalarFieldEnum[]
  }

  /**
   * Intimacao without action
   */
  export type IntimacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Intimacao
     */
    select?: IntimacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Intimacao
     */
    omit?: IntimacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntimacaoInclude<ExtArgs> | null
  }


  /**
   * Model Notificacao
   */

  export type AggregateNotificacao = {
    _count: NotificacaoCountAggregateOutputType | null
    _avg: NotificacaoAvgAggregateOutputType | null
    _sum: NotificacaoSumAggregateOutputType | null
    _min: NotificacaoMinAggregateOutputType | null
    _max: NotificacaoMaxAggregateOutputType | null
  }

  export type NotificacaoAvgAggregateOutputType = {
    tentativas: number | null
  }

  export type NotificacaoSumAggregateOutputType = {
    tentativas: number | null
  }

  export type NotificacaoMinAggregateOutputType = {
    id: string | null
    intimacaoId: string | null
    tipo: string | null
    status: string | null
    dataEnvio: Date | null
    tentativas: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificacaoMaxAggregateOutputType = {
    id: string | null
    intimacaoId: string | null
    tipo: string | null
    status: string | null
    dataEnvio: Date | null
    tentativas: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificacaoCountAggregateOutputType = {
    id: number
    intimacaoId: number
    tipo: number
    status: number
    dataEnvio: number
    tentativas: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NotificacaoAvgAggregateInputType = {
    tentativas?: true
  }

  export type NotificacaoSumAggregateInputType = {
    tentativas?: true
  }

  export type NotificacaoMinAggregateInputType = {
    id?: true
    intimacaoId?: true
    tipo?: true
    status?: true
    dataEnvio?: true
    tentativas?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificacaoMaxAggregateInputType = {
    id?: true
    intimacaoId?: true
    tipo?: true
    status?: true
    dataEnvio?: true
    tentativas?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificacaoCountAggregateInputType = {
    id?: true
    intimacaoId?: true
    tipo?: true
    status?: true
    dataEnvio?: true
    tentativas?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NotificacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notificacao to aggregate.
     */
    where?: NotificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacaos to fetch.
     */
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notificacaos
    **/
    _count?: true | NotificacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificacaoMaxAggregateInputType
  }

  export type GetNotificacaoAggregateType<T extends NotificacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificacao[P]>
      : GetScalarType<T[P], AggregateNotificacao[P]>
  }




  export type NotificacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificacaoWhereInput
    orderBy?: NotificacaoOrderByWithAggregationInput | NotificacaoOrderByWithAggregationInput[]
    by: NotificacaoScalarFieldEnum[] | NotificacaoScalarFieldEnum
    having?: NotificacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificacaoCountAggregateInputType | true
    _avg?: NotificacaoAvgAggregateInputType
    _sum?: NotificacaoSumAggregateInputType
    _min?: NotificacaoMinAggregateInputType
    _max?: NotificacaoMaxAggregateInputType
  }

  export type NotificacaoGroupByOutputType = {
    id: string
    intimacaoId: string
    tipo: string
    status: string
    dataEnvio: Date | null
    tentativas: number
    createdAt: Date
    updatedAt: Date
    _count: NotificacaoCountAggregateOutputType | null
    _avg: NotificacaoAvgAggregateOutputType | null
    _sum: NotificacaoSumAggregateOutputType | null
    _min: NotificacaoMinAggregateOutputType | null
    _max: NotificacaoMaxAggregateOutputType | null
  }

  type GetNotificacaoGroupByPayload<T extends NotificacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificacaoGroupByOutputType[P]>
            : GetScalarType<T[P], NotificacaoGroupByOutputType[P]>
        }
      >
    >


  export type NotificacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    intimacaoId?: boolean
    tipo?: boolean
    status?: boolean
    dataEnvio?: boolean
    tentativas?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    intimacao?: boolean | IntimacaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificacao"]>

  export type NotificacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    intimacaoId?: boolean
    tipo?: boolean
    status?: boolean
    dataEnvio?: boolean
    tentativas?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    intimacao?: boolean | IntimacaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificacao"]>

  export type NotificacaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    intimacaoId?: boolean
    tipo?: boolean
    status?: boolean
    dataEnvio?: boolean
    tentativas?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    intimacao?: boolean | IntimacaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificacao"]>

  export type NotificacaoSelectScalar = {
    id?: boolean
    intimacaoId?: boolean
    tipo?: boolean
    status?: boolean
    dataEnvio?: boolean
    tentativas?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NotificacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "intimacaoId" | "tipo" | "status" | "dataEnvio" | "tentativas" | "createdAt" | "updatedAt", ExtArgs["result"]["notificacao"]>
  export type NotificacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    intimacao?: boolean | IntimacaoDefaultArgs<ExtArgs>
  }
  export type NotificacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    intimacao?: boolean | IntimacaoDefaultArgs<ExtArgs>
  }
  export type NotificacaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    intimacao?: boolean | IntimacaoDefaultArgs<ExtArgs>
  }

  export type $NotificacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notificacao"
    objects: {
      intimacao: Prisma.$IntimacaoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      intimacaoId: string
      tipo: string
      status: string
      dataEnvio: Date | null
      tentativas: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["notificacao"]>
    composites: {}
  }

  type NotificacaoGetPayload<S extends boolean | null | undefined | NotificacaoDefaultArgs> = $Result.GetResult<Prisma.$NotificacaoPayload, S>

  type NotificacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificacaoCountAggregateInputType | true
    }

  export interface NotificacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notificacao'], meta: { name: 'Notificacao' } }
    /**
     * Find zero or one Notificacao that matches the filter.
     * @param {NotificacaoFindUniqueArgs} args - Arguments to find a Notificacao
     * @example
     * // Get one Notificacao
     * const notificacao = await prisma.notificacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificacaoFindUniqueArgs>(args: SelectSubset<T, NotificacaoFindUniqueArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notificacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificacaoFindUniqueOrThrowArgs} args - Arguments to find a Notificacao
     * @example
     * // Get one Notificacao
     * const notificacao = await prisma.notificacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notificacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoFindFirstArgs} args - Arguments to find a Notificacao
     * @example
     * // Get one Notificacao
     * const notificacao = await prisma.notificacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificacaoFindFirstArgs>(args?: SelectSubset<T, NotificacaoFindFirstArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notificacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoFindFirstOrThrowArgs} args - Arguments to find a Notificacao
     * @example
     * // Get one Notificacao
     * const notificacao = await prisma.notificacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notificacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notificacaos
     * const notificacaos = await prisma.notificacao.findMany()
     * 
     * // Get first 10 Notificacaos
     * const notificacaos = await prisma.notificacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificacaoWithIdOnly = await prisma.notificacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificacaoFindManyArgs>(args?: SelectSubset<T, NotificacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notificacao.
     * @param {NotificacaoCreateArgs} args - Arguments to create a Notificacao.
     * @example
     * // Create one Notificacao
     * const Notificacao = await prisma.notificacao.create({
     *   data: {
     *     // ... data to create a Notificacao
     *   }
     * })
     * 
     */
    create<T extends NotificacaoCreateArgs>(args: SelectSubset<T, NotificacaoCreateArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notificacaos.
     * @param {NotificacaoCreateManyArgs} args - Arguments to create many Notificacaos.
     * @example
     * // Create many Notificacaos
     * const notificacao = await prisma.notificacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificacaoCreateManyArgs>(args?: SelectSubset<T, NotificacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notificacaos and returns the data saved in the database.
     * @param {NotificacaoCreateManyAndReturnArgs} args - Arguments to create many Notificacaos.
     * @example
     * // Create many Notificacaos
     * const notificacao = await prisma.notificacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notificacaos and only return the `id`
     * const notificacaoWithIdOnly = await prisma.notificacao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notificacao.
     * @param {NotificacaoDeleteArgs} args - Arguments to delete one Notificacao.
     * @example
     * // Delete one Notificacao
     * const Notificacao = await prisma.notificacao.delete({
     *   where: {
     *     // ... filter to delete one Notificacao
     *   }
     * })
     * 
     */
    delete<T extends NotificacaoDeleteArgs>(args: SelectSubset<T, NotificacaoDeleteArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notificacao.
     * @param {NotificacaoUpdateArgs} args - Arguments to update one Notificacao.
     * @example
     * // Update one Notificacao
     * const notificacao = await prisma.notificacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificacaoUpdateArgs>(args: SelectSubset<T, NotificacaoUpdateArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notificacaos.
     * @param {NotificacaoDeleteManyArgs} args - Arguments to filter Notificacaos to delete.
     * @example
     * // Delete a few Notificacaos
     * const { count } = await prisma.notificacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificacaoDeleteManyArgs>(args?: SelectSubset<T, NotificacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notificacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notificacaos
     * const notificacao = await prisma.notificacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificacaoUpdateManyArgs>(args: SelectSubset<T, NotificacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notificacaos and returns the data updated in the database.
     * @param {NotificacaoUpdateManyAndReturnArgs} args - Arguments to update many Notificacaos.
     * @example
     * // Update many Notificacaos
     * const notificacao = await prisma.notificacao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notificacaos and only return the `id`
     * const notificacaoWithIdOnly = await prisma.notificacao.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificacaoUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificacaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notificacao.
     * @param {NotificacaoUpsertArgs} args - Arguments to update or create a Notificacao.
     * @example
     * // Update or create a Notificacao
     * const notificacao = await prisma.notificacao.upsert({
     *   create: {
     *     // ... data to create a Notificacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notificacao we want to update
     *   }
     * })
     */
    upsert<T extends NotificacaoUpsertArgs>(args: SelectSubset<T, NotificacaoUpsertArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notificacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoCountArgs} args - Arguments to filter Notificacaos to count.
     * @example
     * // Count the number of Notificacaos
     * const count = await prisma.notificacao.count({
     *   where: {
     *     // ... the filter for the Notificacaos we want to count
     *   }
     * })
    **/
    count<T extends NotificacaoCountArgs>(
      args?: Subset<T, NotificacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notificacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificacaoAggregateArgs>(args: Subset<T, NotificacaoAggregateArgs>): Prisma.PrismaPromise<GetNotificacaoAggregateType<T>>

    /**
     * Group by Notificacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificacaoGroupByArgs['orderBy'] }
        : { orderBy?: NotificacaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notificacao model
   */
  readonly fields: NotificacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notificacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    intimacao<T extends IntimacaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IntimacaoDefaultArgs<ExtArgs>>): Prisma__IntimacaoClient<$Result.GetResult<Prisma.$IntimacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notificacao model
   */
  interface NotificacaoFieldRefs {
    readonly id: FieldRef<"Notificacao", 'String'>
    readonly intimacaoId: FieldRef<"Notificacao", 'String'>
    readonly tipo: FieldRef<"Notificacao", 'String'>
    readonly status: FieldRef<"Notificacao", 'String'>
    readonly dataEnvio: FieldRef<"Notificacao", 'DateTime'>
    readonly tentativas: FieldRef<"Notificacao", 'Int'>
    readonly createdAt: FieldRef<"Notificacao", 'DateTime'>
    readonly updatedAt: FieldRef<"Notificacao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notificacao findUnique
   */
  export type NotificacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacao to fetch.
     */
    where: NotificacaoWhereUniqueInput
  }

  /**
   * Notificacao findUniqueOrThrow
   */
  export type NotificacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacao to fetch.
     */
    where: NotificacaoWhereUniqueInput
  }

  /**
   * Notificacao findFirst
   */
  export type NotificacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacao to fetch.
     */
    where?: NotificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacaos to fetch.
     */
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notificacaos.
     */
    cursor?: NotificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notificacaos.
     */
    distinct?: NotificacaoScalarFieldEnum | NotificacaoScalarFieldEnum[]
  }

  /**
   * Notificacao findFirstOrThrow
   */
  export type NotificacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacao to fetch.
     */
    where?: NotificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacaos to fetch.
     */
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notificacaos.
     */
    cursor?: NotificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notificacaos.
     */
    distinct?: NotificacaoScalarFieldEnum | NotificacaoScalarFieldEnum[]
  }

  /**
   * Notificacao findMany
   */
  export type NotificacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacaos to fetch.
     */
    where?: NotificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacaos to fetch.
     */
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notificacaos.
     */
    cursor?: NotificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacaos.
     */
    skip?: number
    distinct?: NotificacaoScalarFieldEnum | NotificacaoScalarFieldEnum[]
  }

  /**
   * Notificacao create
   */
  export type NotificacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Notificacao.
     */
    data: XOR<NotificacaoCreateInput, NotificacaoUncheckedCreateInput>
  }

  /**
   * Notificacao createMany
   */
  export type NotificacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notificacaos.
     */
    data: NotificacaoCreateManyInput | NotificacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notificacao createManyAndReturn
   */
  export type NotificacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * The data used to create many Notificacaos.
     */
    data: NotificacaoCreateManyInput | NotificacaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notificacao update
   */
  export type NotificacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Notificacao.
     */
    data: XOR<NotificacaoUpdateInput, NotificacaoUncheckedUpdateInput>
    /**
     * Choose, which Notificacao to update.
     */
    where: NotificacaoWhereUniqueInput
  }

  /**
   * Notificacao updateMany
   */
  export type NotificacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notificacaos.
     */
    data: XOR<NotificacaoUpdateManyMutationInput, NotificacaoUncheckedUpdateManyInput>
    /**
     * Filter which Notificacaos to update
     */
    where?: NotificacaoWhereInput
    /**
     * Limit how many Notificacaos to update.
     */
    limit?: number
  }

  /**
   * Notificacao updateManyAndReturn
   */
  export type NotificacaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * The data used to update Notificacaos.
     */
    data: XOR<NotificacaoUpdateManyMutationInput, NotificacaoUncheckedUpdateManyInput>
    /**
     * Filter which Notificacaos to update
     */
    where?: NotificacaoWhereInput
    /**
     * Limit how many Notificacaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notificacao upsert
   */
  export type NotificacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Notificacao to update in case it exists.
     */
    where: NotificacaoWhereUniqueInput
    /**
     * In case the Notificacao found by the `where` argument doesn't exist, create a new Notificacao with this data.
     */
    create: XOR<NotificacaoCreateInput, NotificacaoUncheckedCreateInput>
    /**
     * In case the Notificacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificacaoUpdateInput, NotificacaoUncheckedUpdateInput>
  }

  /**
   * Notificacao delete
   */
  export type NotificacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter which Notificacao to delete.
     */
    where: NotificacaoWhereUniqueInput
  }

  /**
   * Notificacao deleteMany
   */
  export type NotificacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notificacaos to delete
     */
    where?: NotificacaoWhereInput
    /**
     * Limit how many Notificacaos to delete.
     */
    limit?: number
  }

  /**
   * Notificacao without action
   */
  export type NotificacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
  }


  /**
   * Model GoogleAuth
   */

  export type AggregateGoogleAuth = {
    _count: GoogleAuthCountAggregateOutputType | null
    _min: GoogleAuthMinAggregateOutputType | null
    _max: GoogleAuthMaxAggregateOutputType | null
  }

  export type GoogleAuthMinAggregateOutputType = {
    id: string | null
    advogadoId: string | null
    accessToken: string | null
    refreshToken: string | null
    expiresAt: Date | null
    scope: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GoogleAuthMaxAggregateOutputType = {
    id: string | null
    advogadoId: string | null
    accessToken: string | null
    refreshToken: string | null
    expiresAt: Date | null
    scope: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GoogleAuthCountAggregateOutputType = {
    id: number
    advogadoId: number
    accessToken: number
    refreshToken: number
    expiresAt: number
    scope: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GoogleAuthMinAggregateInputType = {
    id?: true
    advogadoId?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
    scope?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GoogleAuthMaxAggregateInputType = {
    id?: true
    advogadoId?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
    scope?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GoogleAuthCountAggregateInputType = {
    id?: true
    advogadoId?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
    scope?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GoogleAuthAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GoogleAuth to aggregate.
     */
    where?: GoogleAuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoogleAuths to fetch.
     */
    orderBy?: GoogleAuthOrderByWithRelationInput | GoogleAuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GoogleAuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoogleAuths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoogleAuths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GoogleAuths
    **/
    _count?: true | GoogleAuthCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GoogleAuthMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GoogleAuthMaxAggregateInputType
  }

  export type GetGoogleAuthAggregateType<T extends GoogleAuthAggregateArgs> = {
        [P in keyof T & keyof AggregateGoogleAuth]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGoogleAuth[P]>
      : GetScalarType<T[P], AggregateGoogleAuth[P]>
  }




  export type GoogleAuthGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoogleAuthWhereInput
    orderBy?: GoogleAuthOrderByWithAggregationInput | GoogleAuthOrderByWithAggregationInput[]
    by: GoogleAuthScalarFieldEnum[] | GoogleAuthScalarFieldEnum
    having?: GoogleAuthScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GoogleAuthCountAggregateInputType | true
    _min?: GoogleAuthMinAggregateInputType
    _max?: GoogleAuthMaxAggregateInputType
  }

  export type GoogleAuthGroupByOutputType = {
    id: string
    advogadoId: string
    accessToken: string
    refreshToken: string
    expiresAt: Date
    scope: string
    createdAt: Date
    updatedAt: Date
    _count: GoogleAuthCountAggregateOutputType | null
    _min: GoogleAuthMinAggregateOutputType | null
    _max: GoogleAuthMaxAggregateOutputType | null
  }

  type GetGoogleAuthGroupByPayload<T extends GoogleAuthGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GoogleAuthGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GoogleAuthGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GoogleAuthGroupByOutputType[P]>
            : GetScalarType<T[P], GoogleAuthGroupByOutputType[P]>
        }
      >
    >


  export type GoogleAuthSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    advogadoId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    scope?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    advogado?: boolean | AdvogadoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["googleAuth"]>

  export type GoogleAuthSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    advogadoId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    scope?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    advogado?: boolean | AdvogadoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["googleAuth"]>

  export type GoogleAuthSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    advogadoId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    scope?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    advogado?: boolean | AdvogadoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["googleAuth"]>

  export type GoogleAuthSelectScalar = {
    id?: boolean
    advogadoId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    scope?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GoogleAuthOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "advogadoId" | "accessToken" | "refreshToken" | "expiresAt" | "scope" | "createdAt" | "updatedAt", ExtArgs["result"]["googleAuth"]>
  export type GoogleAuthInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    advogado?: boolean | AdvogadoDefaultArgs<ExtArgs>
  }
  export type GoogleAuthIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    advogado?: boolean | AdvogadoDefaultArgs<ExtArgs>
  }
  export type GoogleAuthIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    advogado?: boolean | AdvogadoDefaultArgs<ExtArgs>
  }

  export type $GoogleAuthPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GoogleAuth"
    objects: {
      advogado: Prisma.$AdvogadoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      advogadoId: string
      accessToken: string
      refreshToken: string
      expiresAt: Date
      scope: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["googleAuth"]>
    composites: {}
  }

  type GoogleAuthGetPayload<S extends boolean | null | undefined | GoogleAuthDefaultArgs> = $Result.GetResult<Prisma.$GoogleAuthPayload, S>

  type GoogleAuthCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GoogleAuthFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GoogleAuthCountAggregateInputType | true
    }

  export interface GoogleAuthDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GoogleAuth'], meta: { name: 'GoogleAuth' } }
    /**
     * Find zero or one GoogleAuth that matches the filter.
     * @param {GoogleAuthFindUniqueArgs} args - Arguments to find a GoogleAuth
     * @example
     * // Get one GoogleAuth
     * const googleAuth = await prisma.googleAuth.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GoogleAuthFindUniqueArgs>(args: SelectSubset<T, GoogleAuthFindUniqueArgs<ExtArgs>>): Prisma__GoogleAuthClient<$Result.GetResult<Prisma.$GoogleAuthPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GoogleAuth that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GoogleAuthFindUniqueOrThrowArgs} args - Arguments to find a GoogleAuth
     * @example
     * // Get one GoogleAuth
     * const googleAuth = await prisma.googleAuth.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GoogleAuthFindUniqueOrThrowArgs>(args: SelectSubset<T, GoogleAuthFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GoogleAuthClient<$Result.GetResult<Prisma.$GoogleAuthPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GoogleAuth that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleAuthFindFirstArgs} args - Arguments to find a GoogleAuth
     * @example
     * // Get one GoogleAuth
     * const googleAuth = await prisma.googleAuth.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GoogleAuthFindFirstArgs>(args?: SelectSubset<T, GoogleAuthFindFirstArgs<ExtArgs>>): Prisma__GoogleAuthClient<$Result.GetResult<Prisma.$GoogleAuthPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GoogleAuth that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleAuthFindFirstOrThrowArgs} args - Arguments to find a GoogleAuth
     * @example
     * // Get one GoogleAuth
     * const googleAuth = await prisma.googleAuth.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GoogleAuthFindFirstOrThrowArgs>(args?: SelectSubset<T, GoogleAuthFindFirstOrThrowArgs<ExtArgs>>): Prisma__GoogleAuthClient<$Result.GetResult<Prisma.$GoogleAuthPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GoogleAuths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleAuthFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GoogleAuths
     * const googleAuths = await prisma.googleAuth.findMany()
     * 
     * // Get first 10 GoogleAuths
     * const googleAuths = await prisma.googleAuth.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const googleAuthWithIdOnly = await prisma.googleAuth.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GoogleAuthFindManyArgs>(args?: SelectSubset<T, GoogleAuthFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoogleAuthPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GoogleAuth.
     * @param {GoogleAuthCreateArgs} args - Arguments to create a GoogleAuth.
     * @example
     * // Create one GoogleAuth
     * const GoogleAuth = await prisma.googleAuth.create({
     *   data: {
     *     // ... data to create a GoogleAuth
     *   }
     * })
     * 
     */
    create<T extends GoogleAuthCreateArgs>(args: SelectSubset<T, GoogleAuthCreateArgs<ExtArgs>>): Prisma__GoogleAuthClient<$Result.GetResult<Prisma.$GoogleAuthPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GoogleAuths.
     * @param {GoogleAuthCreateManyArgs} args - Arguments to create many GoogleAuths.
     * @example
     * // Create many GoogleAuths
     * const googleAuth = await prisma.googleAuth.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GoogleAuthCreateManyArgs>(args?: SelectSubset<T, GoogleAuthCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GoogleAuths and returns the data saved in the database.
     * @param {GoogleAuthCreateManyAndReturnArgs} args - Arguments to create many GoogleAuths.
     * @example
     * // Create many GoogleAuths
     * const googleAuth = await prisma.googleAuth.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GoogleAuths and only return the `id`
     * const googleAuthWithIdOnly = await prisma.googleAuth.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GoogleAuthCreateManyAndReturnArgs>(args?: SelectSubset<T, GoogleAuthCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoogleAuthPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GoogleAuth.
     * @param {GoogleAuthDeleteArgs} args - Arguments to delete one GoogleAuth.
     * @example
     * // Delete one GoogleAuth
     * const GoogleAuth = await prisma.googleAuth.delete({
     *   where: {
     *     // ... filter to delete one GoogleAuth
     *   }
     * })
     * 
     */
    delete<T extends GoogleAuthDeleteArgs>(args: SelectSubset<T, GoogleAuthDeleteArgs<ExtArgs>>): Prisma__GoogleAuthClient<$Result.GetResult<Prisma.$GoogleAuthPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GoogleAuth.
     * @param {GoogleAuthUpdateArgs} args - Arguments to update one GoogleAuth.
     * @example
     * // Update one GoogleAuth
     * const googleAuth = await prisma.googleAuth.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GoogleAuthUpdateArgs>(args: SelectSubset<T, GoogleAuthUpdateArgs<ExtArgs>>): Prisma__GoogleAuthClient<$Result.GetResult<Prisma.$GoogleAuthPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GoogleAuths.
     * @param {GoogleAuthDeleteManyArgs} args - Arguments to filter GoogleAuths to delete.
     * @example
     * // Delete a few GoogleAuths
     * const { count } = await prisma.googleAuth.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GoogleAuthDeleteManyArgs>(args?: SelectSubset<T, GoogleAuthDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GoogleAuths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleAuthUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GoogleAuths
     * const googleAuth = await prisma.googleAuth.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GoogleAuthUpdateManyArgs>(args: SelectSubset<T, GoogleAuthUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GoogleAuths and returns the data updated in the database.
     * @param {GoogleAuthUpdateManyAndReturnArgs} args - Arguments to update many GoogleAuths.
     * @example
     * // Update many GoogleAuths
     * const googleAuth = await prisma.googleAuth.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GoogleAuths and only return the `id`
     * const googleAuthWithIdOnly = await prisma.googleAuth.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GoogleAuthUpdateManyAndReturnArgs>(args: SelectSubset<T, GoogleAuthUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoogleAuthPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GoogleAuth.
     * @param {GoogleAuthUpsertArgs} args - Arguments to update or create a GoogleAuth.
     * @example
     * // Update or create a GoogleAuth
     * const googleAuth = await prisma.googleAuth.upsert({
     *   create: {
     *     // ... data to create a GoogleAuth
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GoogleAuth we want to update
     *   }
     * })
     */
    upsert<T extends GoogleAuthUpsertArgs>(args: SelectSubset<T, GoogleAuthUpsertArgs<ExtArgs>>): Prisma__GoogleAuthClient<$Result.GetResult<Prisma.$GoogleAuthPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GoogleAuths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleAuthCountArgs} args - Arguments to filter GoogleAuths to count.
     * @example
     * // Count the number of GoogleAuths
     * const count = await prisma.googleAuth.count({
     *   where: {
     *     // ... the filter for the GoogleAuths we want to count
     *   }
     * })
    **/
    count<T extends GoogleAuthCountArgs>(
      args?: Subset<T, GoogleAuthCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GoogleAuthCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GoogleAuth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleAuthAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GoogleAuthAggregateArgs>(args: Subset<T, GoogleAuthAggregateArgs>): Prisma.PrismaPromise<GetGoogleAuthAggregateType<T>>

    /**
     * Group by GoogleAuth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleAuthGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GoogleAuthGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GoogleAuthGroupByArgs['orderBy'] }
        : { orderBy?: GoogleAuthGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GoogleAuthGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGoogleAuthGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GoogleAuth model
   */
  readonly fields: GoogleAuthFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GoogleAuth.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GoogleAuthClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    advogado<T extends AdvogadoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdvogadoDefaultArgs<ExtArgs>>): Prisma__AdvogadoClient<$Result.GetResult<Prisma.$AdvogadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GoogleAuth model
   */
  interface GoogleAuthFieldRefs {
    readonly id: FieldRef<"GoogleAuth", 'String'>
    readonly advogadoId: FieldRef<"GoogleAuth", 'String'>
    readonly accessToken: FieldRef<"GoogleAuth", 'String'>
    readonly refreshToken: FieldRef<"GoogleAuth", 'String'>
    readonly expiresAt: FieldRef<"GoogleAuth", 'DateTime'>
    readonly scope: FieldRef<"GoogleAuth", 'String'>
    readonly createdAt: FieldRef<"GoogleAuth", 'DateTime'>
    readonly updatedAt: FieldRef<"GoogleAuth", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GoogleAuth findUnique
   */
  export type GoogleAuthFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleAuth
     */
    select?: GoogleAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleAuth
     */
    omit?: GoogleAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleAuthInclude<ExtArgs> | null
    /**
     * Filter, which GoogleAuth to fetch.
     */
    where: GoogleAuthWhereUniqueInput
  }

  /**
   * GoogleAuth findUniqueOrThrow
   */
  export type GoogleAuthFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleAuth
     */
    select?: GoogleAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleAuth
     */
    omit?: GoogleAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleAuthInclude<ExtArgs> | null
    /**
     * Filter, which GoogleAuth to fetch.
     */
    where: GoogleAuthWhereUniqueInput
  }

  /**
   * GoogleAuth findFirst
   */
  export type GoogleAuthFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleAuth
     */
    select?: GoogleAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleAuth
     */
    omit?: GoogleAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleAuthInclude<ExtArgs> | null
    /**
     * Filter, which GoogleAuth to fetch.
     */
    where?: GoogleAuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoogleAuths to fetch.
     */
    orderBy?: GoogleAuthOrderByWithRelationInput | GoogleAuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GoogleAuths.
     */
    cursor?: GoogleAuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoogleAuths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoogleAuths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GoogleAuths.
     */
    distinct?: GoogleAuthScalarFieldEnum | GoogleAuthScalarFieldEnum[]
  }

  /**
   * GoogleAuth findFirstOrThrow
   */
  export type GoogleAuthFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleAuth
     */
    select?: GoogleAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleAuth
     */
    omit?: GoogleAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleAuthInclude<ExtArgs> | null
    /**
     * Filter, which GoogleAuth to fetch.
     */
    where?: GoogleAuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoogleAuths to fetch.
     */
    orderBy?: GoogleAuthOrderByWithRelationInput | GoogleAuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GoogleAuths.
     */
    cursor?: GoogleAuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoogleAuths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoogleAuths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GoogleAuths.
     */
    distinct?: GoogleAuthScalarFieldEnum | GoogleAuthScalarFieldEnum[]
  }

  /**
   * GoogleAuth findMany
   */
  export type GoogleAuthFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleAuth
     */
    select?: GoogleAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleAuth
     */
    omit?: GoogleAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleAuthInclude<ExtArgs> | null
    /**
     * Filter, which GoogleAuths to fetch.
     */
    where?: GoogleAuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoogleAuths to fetch.
     */
    orderBy?: GoogleAuthOrderByWithRelationInput | GoogleAuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GoogleAuths.
     */
    cursor?: GoogleAuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoogleAuths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoogleAuths.
     */
    skip?: number
    distinct?: GoogleAuthScalarFieldEnum | GoogleAuthScalarFieldEnum[]
  }

  /**
   * GoogleAuth create
   */
  export type GoogleAuthCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleAuth
     */
    select?: GoogleAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleAuth
     */
    omit?: GoogleAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleAuthInclude<ExtArgs> | null
    /**
     * The data needed to create a GoogleAuth.
     */
    data: XOR<GoogleAuthCreateInput, GoogleAuthUncheckedCreateInput>
  }

  /**
   * GoogleAuth createMany
   */
  export type GoogleAuthCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GoogleAuths.
     */
    data: GoogleAuthCreateManyInput | GoogleAuthCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GoogleAuth createManyAndReturn
   */
  export type GoogleAuthCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleAuth
     */
    select?: GoogleAuthSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleAuth
     */
    omit?: GoogleAuthOmit<ExtArgs> | null
    /**
     * The data used to create many GoogleAuths.
     */
    data: GoogleAuthCreateManyInput | GoogleAuthCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleAuthIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GoogleAuth update
   */
  export type GoogleAuthUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleAuth
     */
    select?: GoogleAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleAuth
     */
    omit?: GoogleAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleAuthInclude<ExtArgs> | null
    /**
     * The data needed to update a GoogleAuth.
     */
    data: XOR<GoogleAuthUpdateInput, GoogleAuthUncheckedUpdateInput>
    /**
     * Choose, which GoogleAuth to update.
     */
    where: GoogleAuthWhereUniqueInput
  }

  /**
   * GoogleAuth updateMany
   */
  export type GoogleAuthUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GoogleAuths.
     */
    data: XOR<GoogleAuthUpdateManyMutationInput, GoogleAuthUncheckedUpdateManyInput>
    /**
     * Filter which GoogleAuths to update
     */
    where?: GoogleAuthWhereInput
    /**
     * Limit how many GoogleAuths to update.
     */
    limit?: number
  }

  /**
   * GoogleAuth updateManyAndReturn
   */
  export type GoogleAuthUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleAuth
     */
    select?: GoogleAuthSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleAuth
     */
    omit?: GoogleAuthOmit<ExtArgs> | null
    /**
     * The data used to update GoogleAuths.
     */
    data: XOR<GoogleAuthUpdateManyMutationInput, GoogleAuthUncheckedUpdateManyInput>
    /**
     * Filter which GoogleAuths to update
     */
    where?: GoogleAuthWhereInput
    /**
     * Limit how many GoogleAuths to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleAuthIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GoogleAuth upsert
   */
  export type GoogleAuthUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleAuth
     */
    select?: GoogleAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleAuth
     */
    omit?: GoogleAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleAuthInclude<ExtArgs> | null
    /**
     * The filter to search for the GoogleAuth to update in case it exists.
     */
    where: GoogleAuthWhereUniqueInput
    /**
     * In case the GoogleAuth found by the `where` argument doesn't exist, create a new GoogleAuth with this data.
     */
    create: XOR<GoogleAuthCreateInput, GoogleAuthUncheckedCreateInput>
    /**
     * In case the GoogleAuth was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GoogleAuthUpdateInput, GoogleAuthUncheckedUpdateInput>
  }

  /**
   * GoogleAuth delete
   */
  export type GoogleAuthDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleAuth
     */
    select?: GoogleAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleAuth
     */
    omit?: GoogleAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleAuthInclude<ExtArgs> | null
    /**
     * Filter which GoogleAuth to delete.
     */
    where: GoogleAuthWhereUniqueInput
  }

  /**
   * GoogleAuth deleteMany
   */
  export type GoogleAuthDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GoogleAuths to delete
     */
    where?: GoogleAuthWhereInput
    /**
     * Limit how many GoogleAuths to delete.
     */
    limit?: number
  }

  /**
   * GoogleAuth without action
   */
  export type GoogleAuthDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleAuth
     */
    select?: GoogleAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleAuth
     */
    omit?: GoogleAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleAuthInclude<ExtArgs> | null
  }


  /**
   * Model ExecucaoLog
   */

  export type AggregateExecucaoLog = {
    _count: ExecucaoLogCountAggregateOutputType | null
    _avg: ExecucaoLogAvgAggregateOutputType | null
    _sum: ExecucaoLogSumAggregateOutputType | null
    _min: ExecucaoLogMinAggregateOutputType | null
    _max: ExecucaoLogMaxAggregateOutputType | null
  }

  export type ExecucaoLogAvgAggregateOutputType = {
    qtdIntimacoes: number | null
    qtdProcessada: number | null
  }

  export type ExecucaoLogSumAggregateOutputType = {
    qtdIntimacoes: number | null
    qtdProcessada: number | null
  }

  export type ExecucaoLogMinAggregateOutputType = {
    id: string | null
    dataExecucao: Date | null
    status: string | null
    qtdIntimacoes: number | null
    qtdProcessada: number | null
    erro: string | null
    advogado: string | null
    dataConsulta: Date | null
  }

  export type ExecucaoLogMaxAggregateOutputType = {
    id: string | null
    dataExecucao: Date | null
    status: string | null
    qtdIntimacoes: number | null
    qtdProcessada: number | null
    erro: string | null
    advogado: string | null
    dataConsulta: Date | null
  }

  export type ExecucaoLogCountAggregateOutputType = {
    id: number
    dataExecucao: number
    status: number
    qtdIntimacoes: number
    qtdProcessada: number
    erro: number
    advogado: number
    dataConsulta: number
    _all: number
  }


  export type ExecucaoLogAvgAggregateInputType = {
    qtdIntimacoes?: true
    qtdProcessada?: true
  }

  export type ExecucaoLogSumAggregateInputType = {
    qtdIntimacoes?: true
    qtdProcessada?: true
  }

  export type ExecucaoLogMinAggregateInputType = {
    id?: true
    dataExecucao?: true
    status?: true
    qtdIntimacoes?: true
    qtdProcessada?: true
    erro?: true
    advogado?: true
    dataConsulta?: true
  }

  export type ExecucaoLogMaxAggregateInputType = {
    id?: true
    dataExecucao?: true
    status?: true
    qtdIntimacoes?: true
    qtdProcessada?: true
    erro?: true
    advogado?: true
    dataConsulta?: true
  }

  export type ExecucaoLogCountAggregateInputType = {
    id?: true
    dataExecucao?: true
    status?: true
    qtdIntimacoes?: true
    qtdProcessada?: true
    erro?: true
    advogado?: true
    dataConsulta?: true
    _all?: true
  }

  export type ExecucaoLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExecucaoLog to aggregate.
     */
    where?: ExecucaoLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExecucaoLogs to fetch.
     */
    orderBy?: ExecucaoLogOrderByWithRelationInput | ExecucaoLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExecucaoLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExecucaoLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExecucaoLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExecucaoLogs
    **/
    _count?: true | ExecucaoLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExecucaoLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExecucaoLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExecucaoLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExecucaoLogMaxAggregateInputType
  }

  export type GetExecucaoLogAggregateType<T extends ExecucaoLogAggregateArgs> = {
        [P in keyof T & keyof AggregateExecucaoLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExecucaoLog[P]>
      : GetScalarType<T[P], AggregateExecucaoLog[P]>
  }




  export type ExecucaoLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExecucaoLogWhereInput
    orderBy?: ExecucaoLogOrderByWithAggregationInput | ExecucaoLogOrderByWithAggregationInput[]
    by: ExecucaoLogScalarFieldEnum[] | ExecucaoLogScalarFieldEnum
    having?: ExecucaoLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExecucaoLogCountAggregateInputType | true
    _avg?: ExecucaoLogAvgAggregateInputType
    _sum?: ExecucaoLogSumAggregateInputType
    _min?: ExecucaoLogMinAggregateInputType
    _max?: ExecucaoLogMaxAggregateInputType
  }

  export type ExecucaoLogGroupByOutputType = {
    id: string
    dataExecucao: Date
    status: string
    qtdIntimacoes: number
    qtdProcessada: number
    erro: string | null
    advogado: string
    dataConsulta: Date
    _count: ExecucaoLogCountAggregateOutputType | null
    _avg: ExecucaoLogAvgAggregateOutputType | null
    _sum: ExecucaoLogSumAggregateOutputType | null
    _min: ExecucaoLogMinAggregateOutputType | null
    _max: ExecucaoLogMaxAggregateOutputType | null
  }

  type GetExecucaoLogGroupByPayload<T extends ExecucaoLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExecucaoLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExecucaoLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExecucaoLogGroupByOutputType[P]>
            : GetScalarType<T[P], ExecucaoLogGroupByOutputType[P]>
        }
      >
    >


  export type ExecucaoLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataExecucao?: boolean
    status?: boolean
    qtdIntimacoes?: boolean
    qtdProcessada?: boolean
    erro?: boolean
    advogado?: boolean
    dataConsulta?: boolean
  }, ExtArgs["result"]["execucaoLog"]>

  export type ExecucaoLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataExecucao?: boolean
    status?: boolean
    qtdIntimacoes?: boolean
    qtdProcessada?: boolean
    erro?: boolean
    advogado?: boolean
    dataConsulta?: boolean
  }, ExtArgs["result"]["execucaoLog"]>

  export type ExecucaoLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataExecucao?: boolean
    status?: boolean
    qtdIntimacoes?: boolean
    qtdProcessada?: boolean
    erro?: boolean
    advogado?: boolean
    dataConsulta?: boolean
  }, ExtArgs["result"]["execucaoLog"]>

  export type ExecucaoLogSelectScalar = {
    id?: boolean
    dataExecucao?: boolean
    status?: boolean
    qtdIntimacoes?: boolean
    qtdProcessada?: boolean
    erro?: boolean
    advogado?: boolean
    dataConsulta?: boolean
  }

  export type ExecucaoLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dataExecucao" | "status" | "qtdIntimacoes" | "qtdProcessada" | "erro" | "advogado" | "dataConsulta", ExtArgs["result"]["execucaoLog"]>

  export type $ExecucaoLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExecucaoLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dataExecucao: Date
      status: string
      qtdIntimacoes: number
      qtdProcessada: number
      erro: string | null
      advogado: string
      dataConsulta: Date
    }, ExtArgs["result"]["execucaoLog"]>
    composites: {}
  }

  type ExecucaoLogGetPayload<S extends boolean | null | undefined | ExecucaoLogDefaultArgs> = $Result.GetResult<Prisma.$ExecucaoLogPayload, S>

  type ExecucaoLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExecucaoLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExecucaoLogCountAggregateInputType | true
    }

  export interface ExecucaoLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExecucaoLog'], meta: { name: 'ExecucaoLog' } }
    /**
     * Find zero or one ExecucaoLog that matches the filter.
     * @param {ExecucaoLogFindUniqueArgs} args - Arguments to find a ExecucaoLog
     * @example
     * // Get one ExecucaoLog
     * const execucaoLog = await prisma.execucaoLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExecucaoLogFindUniqueArgs>(args: SelectSubset<T, ExecucaoLogFindUniqueArgs<ExtArgs>>): Prisma__ExecucaoLogClient<$Result.GetResult<Prisma.$ExecucaoLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExecucaoLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExecucaoLogFindUniqueOrThrowArgs} args - Arguments to find a ExecucaoLog
     * @example
     * // Get one ExecucaoLog
     * const execucaoLog = await prisma.execucaoLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExecucaoLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ExecucaoLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExecucaoLogClient<$Result.GetResult<Prisma.$ExecucaoLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExecucaoLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecucaoLogFindFirstArgs} args - Arguments to find a ExecucaoLog
     * @example
     * // Get one ExecucaoLog
     * const execucaoLog = await prisma.execucaoLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExecucaoLogFindFirstArgs>(args?: SelectSubset<T, ExecucaoLogFindFirstArgs<ExtArgs>>): Prisma__ExecucaoLogClient<$Result.GetResult<Prisma.$ExecucaoLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExecucaoLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecucaoLogFindFirstOrThrowArgs} args - Arguments to find a ExecucaoLog
     * @example
     * // Get one ExecucaoLog
     * const execucaoLog = await prisma.execucaoLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExecucaoLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ExecucaoLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExecucaoLogClient<$Result.GetResult<Prisma.$ExecucaoLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExecucaoLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecucaoLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExecucaoLogs
     * const execucaoLogs = await prisma.execucaoLog.findMany()
     * 
     * // Get first 10 ExecucaoLogs
     * const execucaoLogs = await prisma.execucaoLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const execucaoLogWithIdOnly = await prisma.execucaoLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExecucaoLogFindManyArgs>(args?: SelectSubset<T, ExecucaoLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecucaoLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExecucaoLog.
     * @param {ExecucaoLogCreateArgs} args - Arguments to create a ExecucaoLog.
     * @example
     * // Create one ExecucaoLog
     * const ExecucaoLog = await prisma.execucaoLog.create({
     *   data: {
     *     // ... data to create a ExecucaoLog
     *   }
     * })
     * 
     */
    create<T extends ExecucaoLogCreateArgs>(args: SelectSubset<T, ExecucaoLogCreateArgs<ExtArgs>>): Prisma__ExecucaoLogClient<$Result.GetResult<Prisma.$ExecucaoLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExecucaoLogs.
     * @param {ExecucaoLogCreateManyArgs} args - Arguments to create many ExecucaoLogs.
     * @example
     * // Create many ExecucaoLogs
     * const execucaoLog = await prisma.execucaoLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExecucaoLogCreateManyArgs>(args?: SelectSubset<T, ExecucaoLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExecucaoLogs and returns the data saved in the database.
     * @param {ExecucaoLogCreateManyAndReturnArgs} args - Arguments to create many ExecucaoLogs.
     * @example
     * // Create many ExecucaoLogs
     * const execucaoLog = await prisma.execucaoLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExecucaoLogs and only return the `id`
     * const execucaoLogWithIdOnly = await prisma.execucaoLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExecucaoLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ExecucaoLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecucaoLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExecucaoLog.
     * @param {ExecucaoLogDeleteArgs} args - Arguments to delete one ExecucaoLog.
     * @example
     * // Delete one ExecucaoLog
     * const ExecucaoLog = await prisma.execucaoLog.delete({
     *   where: {
     *     // ... filter to delete one ExecucaoLog
     *   }
     * })
     * 
     */
    delete<T extends ExecucaoLogDeleteArgs>(args: SelectSubset<T, ExecucaoLogDeleteArgs<ExtArgs>>): Prisma__ExecucaoLogClient<$Result.GetResult<Prisma.$ExecucaoLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExecucaoLog.
     * @param {ExecucaoLogUpdateArgs} args - Arguments to update one ExecucaoLog.
     * @example
     * // Update one ExecucaoLog
     * const execucaoLog = await prisma.execucaoLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExecucaoLogUpdateArgs>(args: SelectSubset<T, ExecucaoLogUpdateArgs<ExtArgs>>): Prisma__ExecucaoLogClient<$Result.GetResult<Prisma.$ExecucaoLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExecucaoLogs.
     * @param {ExecucaoLogDeleteManyArgs} args - Arguments to filter ExecucaoLogs to delete.
     * @example
     * // Delete a few ExecucaoLogs
     * const { count } = await prisma.execucaoLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExecucaoLogDeleteManyArgs>(args?: SelectSubset<T, ExecucaoLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExecucaoLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecucaoLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExecucaoLogs
     * const execucaoLog = await prisma.execucaoLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExecucaoLogUpdateManyArgs>(args: SelectSubset<T, ExecucaoLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExecucaoLogs and returns the data updated in the database.
     * @param {ExecucaoLogUpdateManyAndReturnArgs} args - Arguments to update many ExecucaoLogs.
     * @example
     * // Update many ExecucaoLogs
     * const execucaoLog = await prisma.execucaoLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExecucaoLogs and only return the `id`
     * const execucaoLogWithIdOnly = await prisma.execucaoLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExecucaoLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ExecucaoLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecucaoLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExecucaoLog.
     * @param {ExecucaoLogUpsertArgs} args - Arguments to update or create a ExecucaoLog.
     * @example
     * // Update or create a ExecucaoLog
     * const execucaoLog = await prisma.execucaoLog.upsert({
     *   create: {
     *     // ... data to create a ExecucaoLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExecucaoLog we want to update
     *   }
     * })
     */
    upsert<T extends ExecucaoLogUpsertArgs>(args: SelectSubset<T, ExecucaoLogUpsertArgs<ExtArgs>>): Prisma__ExecucaoLogClient<$Result.GetResult<Prisma.$ExecucaoLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExecucaoLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecucaoLogCountArgs} args - Arguments to filter ExecucaoLogs to count.
     * @example
     * // Count the number of ExecucaoLogs
     * const count = await prisma.execucaoLog.count({
     *   where: {
     *     // ... the filter for the ExecucaoLogs we want to count
     *   }
     * })
    **/
    count<T extends ExecucaoLogCountArgs>(
      args?: Subset<T, ExecucaoLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExecucaoLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExecucaoLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecucaoLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExecucaoLogAggregateArgs>(args: Subset<T, ExecucaoLogAggregateArgs>): Prisma.PrismaPromise<GetExecucaoLogAggregateType<T>>

    /**
     * Group by ExecucaoLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecucaoLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExecucaoLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExecucaoLogGroupByArgs['orderBy'] }
        : { orderBy?: ExecucaoLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExecucaoLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExecucaoLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExecucaoLog model
   */
  readonly fields: ExecucaoLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExecucaoLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExecucaoLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExecucaoLog model
   */
  interface ExecucaoLogFieldRefs {
    readonly id: FieldRef<"ExecucaoLog", 'String'>
    readonly dataExecucao: FieldRef<"ExecucaoLog", 'DateTime'>
    readonly status: FieldRef<"ExecucaoLog", 'String'>
    readonly qtdIntimacoes: FieldRef<"ExecucaoLog", 'Int'>
    readonly qtdProcessada: FieldRef<"ExecucaoLog", 'Int'>
    readonly erro: FieldRef<"ExecucaoLog", 'String'>
    readonly advogado: FieldRef<"ExecucaoLog", 'String'>
    readonly dataConsulta: FieldRef<"ExecucaoLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ExecucaoLog findUnique
   */
  export type ExecucaoLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecucaoLog
     */
    select?: ExecucaoLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecucaoLog
     */
    omit?: ExecucaoLogOmit<ExtArgs> | null
    /**
     * Filter, which ExecucaoLog to fetch.
     */
    where: ExecucaoLogWhereUniqueInput
  }

  /**
   * ExecucaoLog findUniqueOrThrow
   */
  export type ExecucaoLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecucaoLog
     */
    select?: ExecucaoLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecucaoLog
     */
    omit?: ExecucaoLogOmit<ExtArgs> | null
    /**
     * Filter, which ExecucaoLog to fetch.
     */
    where: ExecucaoLogWhereUniqueInput
  }

  /**
   * ExecucaoLog findFirst
   */
  export type ExecucaoLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecucaoLog
     */
    select?: ExecucaoLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecucaoLog
     */
    omit?: ExecucaoLogOmit<ExtArgs> | null
    /**
     * Filter, which ExecucaoLog to fetch.
     */
    where?: ExecucaoLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExecucaoLogs to fetch.
     */
    orderBy?: ExecucaoLogOrderByWithRelationInput | ExecucaoLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExecucaoLogs.
     */
    cursor?: ExecucaoLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExecucaoLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExecucaoLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExecucaoLogs.
     */
    distinct?: ExecucaoLogScalarFieldEnum | ExecucaoLogScalarFieldEnum[]
  }

  /**
   * ExecucaoLog findFirstOrThrow
   */
  export type ExecucaoLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecucaoLog
     */
    select?: ExecucaoLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecucaoLog
     */
    omit?: ExecucaoLogOmit<ExtArgs> | null
    /**
     * Filter, which ExecucaoLog to fetch.
     */
    where?: ExecucaoLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExecucaoLogs to fetch.
     */
    orderBy?: ExecucaoLogOrderByWithRelationInput | ExecucaoLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExecucaoLogs.
     */
    cursor?: ExecucaoLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExecucaoLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExecucaoLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExecucaoLogs.
     */
    distinct?: ExecucaoLogScalarFieldEnum | ExecucaoLogScalarFieldEnum[]
  }

  /**
   * ExecucaoLog findMany
   */
  export type ExecucaoLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecucaoLog
     */
    select?: ExecucaoLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecucaoLog
     */
    omit?: ExecucaoLogOmit<ExtArgs> | null
    /**
     * Filter, which ExecucaoLogs to fetch.
     */
    where?: ExecucaoLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExecucaoLogs to fetch.
     */
    orderBy?: ExecucaoLogOrderByWithRelationInput | ExecucaoLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExecucaoLogs.
     */
    cursor?: ExecucaoLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExecucaoLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExecucaoLogs.
     */
    skip?: number
    distinct?: ExecucaoLogScalarFieldEnum | ExecucaoLogScalarFieldEnum[]
  }

  /**
   * ExecucaoLog create
   */
  export type ExecucaoLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecucaoLog
     */
    select?: ExecucaoLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecucaoLog
     */
    omit?: ExecucaoLogOmit<ExtArgs> | null
    /**
     * The data needed to create a ExecucaoLog.
     */
    data: XOR<ExecucaoLogCreateInput, ExecucaoLogUncheckedCreateInput>
  }

  /**
   * ExecucaoLog createMany
   */
  export type ExecucaoLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExecucaoLogs.
     */
    data: ExecucaoLogCreateManyInput | ExecucaoLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExecucaoLog createManyAndReturn
   */
  export type ExecucaoLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecucaoLog
     */
    select?: ExecucaoLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExecucaoLog
     */
    omit?: ExecucaoLogOmit<ExtArgs> | null
    /**
     * The data used to create many ExecucaoLogs.
     */
    data: ExecucaoLogCreateManyInput | ExecucaoLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExecucaoLog update
   */
  export type ExecucaoLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecucaoLog
     */
    select?: ExecucaoLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecucaoLog
     */
    omit?: ExecucaoLogOmit<ExtArgs> | null
    /**
     * The data needed to update a ExecucaoLog.
     */
    data: XOR<ExecucaoLogUpdateInput, ExecucaoLogUncheckedUpdateInput>
    /**
     * Choose, which ExecucaoLog to update.
     */
    where: ExecucaoLogWhereUniqueInput
  }

  /**
   * ExecucaoLog updateMany
   */
  export type ExecucaoLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExecucaoLogs.
     */
    data: XOR<ExecucaoLogUpdateManyMutationInput, ExecucaoLogUncheckedUpdateManyInput>
    /**
     * Filter which ExecucaoLogs to update
     */
    where?: ExecucaoLogWhereInput
    /**
     * Limit how many ExecucaoLogs to update.
     */
    limit?: number
  }

  /**
   * ExecucaoLog updateManyAndReturn
   */
  export type ExecucaoLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecucaoLog
     */
    select?: ExecucaoLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExecucaoLog
     */
    omit?: ExecucaoLogOmit<ExtArgs> | null
    /**
     * The data used to update ExecucaoLogs.
     */
    data: XOR<ExecucaoLogUpdateManyMutationInput, ExecucaoLogUncheckedUpdateManyInput>
    /**
     * Filter which ExecucaoLogs to update
     */
    where?: ExecucaoLogWhereInput
    /**
     * Limit how many ExecucaoLogs to update.
     */
    limit?: number
  }

  /**
   * ExecucaoLog upsert
   */
  export type ExecucaoLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecucaoLog
     */
    select?: ExecucaoLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecucaoLog
     */
    omit?: ExecucaoLogOmit<ExtArgs> | null
    /**
     * The filter to search for the ExecucaoLog to update in case it exists.
     */
    where: ExecucaoLogWhereUniqueInput
    /**
     * In case the ExecucaoLog found by the `where` argument doesn't exist, create a new ExecucaoLog with this data.
     */
    create: XOR<ExecucaoLogCreateInput, ExecucaoLogUncheckedCreateInput>
    /**
     * In case the ExecucaoLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExecucaoLogUpdateInput, ExecucaoLogUncheckedUpdateInput>
  }

  /**
   * ExecucaoLog delete
   */
  export type ExecucaoLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecucaoLog
     */
    select?: ExecucaoLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecucaoLog
     */
    omit?: ExecucaoLogOmit<ExtArgs> | null
    /**
     * Filter which ExecucaoLog to delete.
     */
    where: ExecucaoLogWhereUniqueInput
  }

  /**
   * ExecucaoLog deleteMany
   */
  export type ExecucaoLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExecucaoLogs to delete
     */
    where?: ExecucaoLogWhereInput
    /**
     * Limit how many ExecucaoLogs to delete.
     */
    limit?: number
  }

  /**
   * ExecucaoLog without action
   */
  export type ExecucaoLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecucaoLog
     */
    select?: ExecucaoLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecucaoLog
     */
    omit?: ExecucaoLogOmit<ExtArgs> | null
  }


  /**
   * Model Feriado
   */

  export type AggregateFeriado = {
    _count: FeriadoCountAggregateOutputType | null
    _min: FeriadoMinAggregateOutputType | null
    _max: FeriadoMaxAggregateOutputType | null
  }

  export type FeriadoMinAggregateOutputType = {
    id: string | null
    siglaTribunal: string | null
    data: Date | null
  }

  export type FeriadoMaxAggregateOutputType = {
    id: string | null
    siglaTribunal: string | null
    data: Date | null
  }

  export type FeriadoCountAggregateOutputType = {
    id: number
    siglaTribunal: number
    data: number
    _all: number
  }


  export type FeriadoMinAggregateInputType = {
    id?: true
    siglaTribunal?: true
    data?: true
  }

  export type FeriadoMaxAggregateInputType = {
    id?: true
    siglaTribunal?: true
    data?: true
  }

  export type FeriadoCountAggregateInputType = {
    id?: true
    siglaTribunal?: true
    data?: true
    _all?: true
  }

  export type FeriadoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feriado to aggregate.
     */
    where?: FeriadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feriados to fetch.
     */
    orderBy?: FeriadoOrderByWithRelationInput | FeriadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeriadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feriados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feriados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Feriados
    **/
    _count?: true | FeriadoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeriadoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeriadoMaxAggregateInputType
  }

  export type GetFeriadoAggregateType<T extends FeriadoAggregateArgs> = {
        [P in keyof T & keyof AggregateFeriado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeriado[P]>
      : GetScalarType<T[P], AggregateFeriado[P]>
  }




  export type FeriadoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeriadoWhereInput
    orderBy?: FeriadoOrderByWithAggregationInput | FeriadoOrderByWithAggregationInput[]
    by: FeriadoScalarFieldEnum[] | FeriadoScalarFieldEnum
    having?: FeriadoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeriadoCountAggregateInputType | true
    _min?: FeriadoMinAggregateInputType
    _max?: FeriadoMaxAggregateInputType
  }

  export type FeriadoGroupByOutputType = {
    id: string
    siglaTribunal: string
    data: Date
    _count: FeriadoCountAggregateOutputType | null
    _min: FeriadoMinAggregateOutputType | null
    _max: FeriadoMaxAggregateOutputType | null
  }

  type GetFeriadoGroupByPayload<T extends FeriadoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeriadoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeriadoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeriadoGroupByOutputType[P]>
            : GetScalarType<T[P], FeriadoGroupByOutputType[P]>
        }
      >
    >


  export type FeriadoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    siglaTribunal?: boolean
    data?: boolean
  }, ExtArgs["result"]["feriado"]>

  export type FeriadoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    siglaTribunal?: boolean
    data?: boolean
  }, ExtArgs["result"]["feriado"]>

  export type FeriadoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    siglaTribunal?: boolean
    data?: boolean
  }, ExtArgs["result"]["feriado"]>

  export type FeriadoSelectScalar = {
    id?: boolean
    siglaTribunal?: boolean
    data?: boolean
  }

  export type FeriadoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "siglaTribunal" | "data", ExtArgs["result"]["feriado"]>

  export type $FeriadoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Feriado"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      siglaTribunal: string
      data: Date
    }, ExtArgs["result"]["feriado"]>
    composites: {}
  }

  type FeriadoGetPayload<S extends boolean | null | undefined | FeriadoDefaultArgs> = $Result.GetResult<Prisma.$FeriadoPayload, S>

  type FeriadoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeriadoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeriadoCountAggregateInputType | true
    }

  export interface FeriadoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Feriado'], meta: { name: 'Feriado' } }
    /**
     * Find zero or one Feriado that matches the filter.
     * @param {FeriadoFindUniqueArgs} args - Arguments to find a Feriado
     * @example
     * // Get one Feriado
     * const feriado = await prisma.feriado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeriadoFindUniqueArgs>(args: SelectSubset<T, FeriadoFindUniqueArgs<ExtArgs>>): Prisma__FeriadoClient<$Result.GetResult<Prisma.$FeriadoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Feriado that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeriadoFindUniqueOrThrowArgs} args - Arguments to find a Feriado
     * @example
     * // Get one Feriado
     * const feriado = await prisma.feriado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeriadoFindUniqueOrThrowArgs>(args: SelectSubset<T, FeriadoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeriadoClient<$Result.GetResult<Prisma.$FeriadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feriado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeriadoFindFirstArgs} args - Arguments to find a Feriado
     * @example
     * // Get one Feriado
     * const feriado = await prisma.feriado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeriadoFindFirstArgs>(args?: SelectSubset<T, FeriadoFindFirstArgs<ExtArgs>>): Prisma__FeriadoClient<$Result.GetResult<Prisma.$FeriadoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feriado that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeriadoFindFirstOrThrowArgs} args - Arguments to find a Feriado
     * @example
     * // Get one Feriado
     * const feriado = await prisma.feriado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeriadoFindFirstOrThrowArgs>(args?: SelectSubset<T, FeriadoFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeriadoClient<$Result.GetResult<Prisma.$FeriadoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Feriados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeriadoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Feriados
     * const feriados = await prisma.feriado.findMany()
     * 
     * // Get first 10 Feriados
     * const feriados = await prisma.feriado.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feriadoWithIdOnly = await prisma.feriado.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeriadoFindManyArgs>(args?: SelectSubset<T, FeriadoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeriadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Feriado.
     * @param {FeriadoCreateArgs} args - Arguments to create a Feriado.
     * @example
     * // Create one Feriado
     * const Feriado = await prisma.feriado.create({
     *   data: {
     *     // ... data to create a Feriado
     *   }
     * })
     * 
     */
    create<T extends FeriadoCreateArgs>(args: SelectSubset<T, FeriadoCreateArgs<ExtArgs>>): Prisma__FeriadoClient<$Result.GetResult<Prisma.$FeriadoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Feriados.
     * @param {FeriadoCreateManyArgs} args - Arguments to create many Feriados.
     * @example
     * // Create many Feriados
     * const feriado = await prisma.feriado.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeriadoCreateManyArgs>(args?: SelectSubset<T, FeriadoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Feriados and returns the data saved in the database.
     * @param {FeriadoCreateManyAndReturnArgs} args - Arguments to create many Feriados.
     * @example
     * // Create many Feriados
     * const feriado = await prisma.feriado.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Feriados and only return the `id`
     * const feriadoWithIdOnly = await prisma.feriado.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeriadoCreateManyAndReturnArgs>(args?: SelectSubset<T, FeriadoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeriadoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Feriado.
     * @param {FeriadoDeleteArgs} args - Arguments to delete one Feriado.
     * @example
     * // Delete one Feriado
     * const Feriado = await prisma.feriado.delete({
     *   where: {
     *     // ... filter to delete one Feriado
     *   }
     * })
     * 
     */
    delete<T extends FeriadoDeleteArgs>(args: SelectSubset<T, FeriadoDeleteArgs<ExtArgs>>): Prisma__FeriadoClient<$Result.GetResult<Prisma.$FeriadoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Feriado.
     * @param {FeriadoUpdateArgs} args - Arguments to update one Feriado.
     * @example
     * // Update one Feriado
     * const feriado = await prisma.feriado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeriadoUpdateArgs>(args: SelectSubset<T, FeriadoUpdateArgs<ExtArgs>>): Prisma__FeriadoClient<$Result.GetResult<Prisma.$FeriadoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Feriados.
     * @param {FeriadoDeleteManyArgs} args - Arguments to filter Feriados to delete.
     * @example
     * // Delete a few Feriados
     * const { count } = await prisma.feriado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeriadoDeleteManyArgs>(args?: SelectSubset<T, FeriadoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feriados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeriadoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Feriados
     * const feriado = await prisma.feriado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeriadoUpdateManyArgs>(args: SelectSubset<T, FeriadoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feriados and returns the data updated in the database.
     * @param {FeriadoUpdateManyAndReturnArgs} args - Arguments to update many Feriados.
     * @example
     * // Update many Feriados
     * const feriado = await prisma.feriado.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Feriados and only return the `id`
     * const feriadoWithIdOnly = await prisma.feriado.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FeriadoUpdateManyAndReturnArgs>(args: SelectSubset<T, FeriadoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeriadoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Feriado.
     * @param {FeriadoUpsertArgs} args - Arguments to update or create a Feriado.
     * @example
     * // Update or create a Feriado
     * const feriado = await prisma.feriado.upsert({
     *   create: {
     *     // ... data to create a Feriado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feriado we want to update
     *   }
     * })
     */
    upsert<T extends FeriadoUpsertArgs>(args: SelectSubset<T, FeriadoUpsertArgs<ExtArgs>>): Prisma__FeriadoClient<$Result.GetResult<Prisma.$FeriadoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Feriados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeriadoCountArgs} args - Arguments to filter Feriados to count.
     * @example
     * // Count the number of Feriados
     * const count = await prisma.feriado.count({
     *   where: {
     *     // ... the filter for the Feriados we want to count
     *   }
     * })
    **/
    count<T extends FeriadoCountArgs>(
      args?: Subset<T, FeriadoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeriadoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feriado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeriadoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FeriadoAggregateArgs>(args: Subset<T, FeriadoAggregateArgs>): Prisma.PrismaPromise<GetFeriadoAggregateType<T>>

    /**
     * Group by Feriado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeriadoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FeriadoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeriadoGroupByArgs['orderBy'] }
        : { orderBy?: FeriadoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FeriadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeriadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Feriado model
   */
  readonly fields: FeriadoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Feriado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeriadoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Feriado model
   */
  interface FeriadoFieldRefs {
    readonly id: FieldRef<"Feriado", 'String'>
    readonly siglaTribunal: FieldRef<"Feriado", 'String'>
    readonly data: FieldRef<"Feriado", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Feriado findUnique
   */
  export type FeriadoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feriado
     */
    select?: FeriadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feriado
     */
    omit?: FeriadoOmit<ExtArgs> | null
    /**
     * Filter, which Feriado to fetch.
     */
    where: FeriadoWhereUniqueInput
  }

  /**
   * Feriado findUniqueOrThrow
   */
  export type FeriadoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feriado
     */
    select?: FeriadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feriado
     */
    omit?: FeriadoOmit<ExtArgs> | null
    /**
     * Filter, which Feriado to fetch.
     */
    where: FeriadoWhereUniqueInput
  }

  /**
   * Feriado findFirst
   */
  export type FeriadoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feriado
     */
    select?: FeriadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feriado
     */
    omit?: FeriadoOmit<ExtArgs> | null
    /**
     * Filter, which Feriado to fetch.
     */
    where?: FeriadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feriados to fetch.
     */
    orderBy?: FeriadoOrderByWithRelationInput | FeriadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feriados.
     */
    cursor?: FeriadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feriados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feriados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feriados.
     */
    distinct?: FeriadoScalarFieldEnum | FeriadoScalarFieldEnum[]
  }

  /**
   * Feriado findFirstOrThrow
   */
  export type FeriadoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feriado
     */
    select?: FeriadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feriado
     */
    omit?: FeriadoOmit<ExtArgs> | null
    /**
     * Filter, which Feriado to fetch.
     */
    where?: FeriadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feriados to fetch.
     */
    orderBy?: FeriadoOrderByWithRelationInput | FeriadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feriados.
     */
    cursor?: FeriadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feriados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feriados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feriados.
     */
    distinct?: FeriadoScalarFieldEnum | FeriadoScalarFieldEnum[]
  }

  /**
   * Feriado findMany
   */
  export type FeriadoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feriado
     */
    select?: FeriadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feriado
     */
    omit?: FeriadoOmit<ExtArgs> | null
    /**
     * Filter, which Feriados to fetch.
     */
    where?: FeriadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feriados to fetch.
     */
    orderBy?: FeriadoOrderByWithRelationInput | FeriadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Feriados.
     */
    cursor?: FeriadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feriados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feriados.
     */
    skip?: number
    distinct?: FeriadoScalarFieldEnum | FeriadoScalarFieldEnum[]
  }

  /**
   * Feriado create
   */
  export type FeriadoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feriado
     */
    select?: FeriadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feriado
     */
    omit?: FeriadoOmit<ExtArgs> | null
    /**
     * The data needed to create a Feriado.
     */
    data: XOR<FeriadoCreateInput, FeriadoUncheckedCreateInput>
  }

  /**
   * Feriado createMany
   */
  export type FeriadoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Feriados.
     */
    data: FeriadoCreateManyInput | FeriadoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Feriado createManyAndReturn
   */
  export type FeriadoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feriado
     */
    select?: FeriadoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feriado
     */
    omit?: FeriadoOmit<ExtArgs> | null
    /**
     * The data used to create many Feriados.
     */
    data: FeriadoCreateManyInput | FeriadoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Feriado update
   */
  export type FeriadoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feriado
     */
    select?: FeriadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feriado
     */
    omit?: FeriadoOmit<ExtArgs> | null
    /**
     * The data needed to update a Feriado.
     */
    data: XOR<FeriadoUpdateInput, FeriadoUncheckedUpdateInput>
    /**
     * Choose, which Feriado to update.
     */
    where: FeriadoWhereUniqueInput
  }

  /**
   * Feriado updateMany
   */
  export type FeriadoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Feriados.
     */
    data: XOR<FeriadoUpdateManyMutationInput, FeriadoUncheckedUpdateManyInput>
    /**
     * Filter which Feriados to update
     */
    where?: FeriadoWhereInput
    /**
     * Limit how many Feriados to update.
     */
    limit?: number
  }

  /**
   * Feriado updateManyAndReturn
   */
  export type FeriadoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feriado
     */
    select?: FeriadoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feriado
     */
    omit?: FeriadoOmit<ExtArgs> | null
    /**
     * The data used to update Feriados.
     */
    data: XOR<FeriadoUpdateManyMutationInput, FeriadoUncheckedUpdateManyInput>
    /**
     * Filter which Feriados to update
     */
    where?: FeriadoWhereInput
    /**
     * Limit how many Feriados to update.
     */
    limit?: number
  }

  /**
   * Feriado upsert
   */
  export type FeriadoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feriado
     */
    select?: FeriadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feriado
     */
    omit?: FeriadoOmit<ExtArgs> | null
    /**
     * The filter to search for the Feriado to update in case it exists.
     */
    where: FeriadoWhereUniqueInput
    /**
     * In case the Feriado found by the `where` argument doesn't exist, create a new Feriado with this data.
     */
    create: XOR<FeriadoCreateInput, FeriadoUncheckedCreateInput>
    /**
     * In case the Feriado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeriadoUpdateInput, FeriadoUncheckedUpdateInput>
  }

  /**
   * Feriado delete
   */
  export type FeriadoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feriado
     */
    select?: FeriadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feriado
     */
    omit?: FeriadoOmit<ExtArgs> | null
    /**
     * Filter which Feriado to delete.
     */
    where: FeriadoWhereUniqueInput
  }

  /**
   * Feriado deleteMany
   */
  export type FeriadoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feriados to delete
     */
    where?: FeriadoWhereInput
    /**
     * Limit how many Feriados to delete.
     */
    limit?: number
  }

  /**
   * Feriado without action
   */
  export type FeriadoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feriado
     */
    select?: FeriadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feriado
     */
    omit?: FeriadoOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdvogadoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    oab: 'oab',
    telefone: 'telefone',
    ativo: 'ativo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    email: 'email',
    googleCalendarId: 'googleCalendarId'
  };

  export type AdvogadoScalarFieldEnum = (typeof AdvogadoScalarFieldEnum)[keyof typeof AdvogadoScalarFieldEnum]


  export const ProcessoScalarFieldEnum: {
    id: 'id',
    numeroProcesso: 'numeroProcesso',
    vara: 'vara',
    tribunal: 'tribunal',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProcessoScalarFieldEnum = (typeof ProcessoScalarFieldEnum)[keyof typeof ProcessoScalarFieldEnum]


  export const IntimacaoScalarFieldEnum: {
    id: 'id',
    processoId: 'processoId',
    advogadoId: 'advogadoId',
    dataPublicacao: 'dataPublicacao',
    prazo: 'prazo',
    dataLimite: 'dataLimite',
    conteudo: 'conteudo',
    resumoIA: 'resumoIA',
    status: 'status',
    googleEventId: 'googleEventId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type IntimacaoScalarFieldEnum = (typeof IntimacaoScalarFieldEnum)[keyof typeof IntimacaoScalarFieldEnum]


  export const NotificacaoScalarFieldEnum: {
    id: 'id',
    intimacaoId: 'intimacaoId',
    tipo: 'tipo',
    status: 'status',
    dataEnvio: 'dataEnvio',
    tentativas: 'tentativas',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NotificacaoScalarFieldEnum = (typeof NotificacaoScalarFieldEnum)[keyof typeof NotificacaoScalarFieldEnum]


  export const GoogleAuthScalarFieldEnum: {
    id: 'id',
    advogadoId: 'advogadoId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    expiresAt: 'expiresAt',
    scope: 'scope',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GoogleAuthScalarFieldEnum = (typeof GoogleAuthScalarFieldEnum)[keyof typeof GoogleAuthScalarFieldEnum]


  export const ExecucaoLogScalarFieldEnum: {
    id: 'id',
    dataExecucao: 'dataExecucao',
    status: 'status',
    qtdIntimacoes: 'qtdIntimacoes',
    qtdProcessada: 'qtdProcessada',
    erro: 'erro',
    advogado: 'advogado',
    dataConsulta: 'dataConsulta'
  };

  export type ExecucaoLogScalarFieldEnum = (typeof ExecucaoLogScalarFieldEnum)[keyof typeof ExecucaoLogScalarFieldEnum]


  export const FeriadoScalarFieldEnum: {
    id: 'id',
    siglaTribunal: 'siglaTribunal',
    data: 'data'
  };

  export type FeriadoScalarFieldEnum = (typeof FeriadoScalarFieldEnum)[keyof typeof FeriadoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AdvogadoWhereInput = {
    AND?: AdvogadoWhereInput | AdvogadoWhereInput[]
    OR?: AdvogadoWhereInput[]
    NOT?: AdvogadoWhereInput | AdvogadoWhereInput[]
    id?: StringFilter<"Advogado"> | string
    nome?: StringFilter<"Advogado"> | string
    oab?: StringFilter<"Advogado"> | string
    telefone?: StringFilter<"Advogado"> | string
    ativo?: BoolFilter<"Advogado"> | boolean
    createdAt?: DateTimeFilter<"Advogado"> | Date | string
    updatedAt?: DateTimeFilter<"Advogado"> | Date | string
    email?: StringFilter<"Advogado"> | string
    googleCalendarId?: StringNullableFilter<"Advogado"> | string | null
    googleAuth?: XOR<GoogleAuthNullableScalarRelationFilter, GoogleAuthWhereInput> | null
    intimacoes?: IntimacaoListRelationFilter
    processos?: ProcessoListRelationFilter
  }

  export type AdvogadoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    oab?: SortOrder
    telefone?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    googleCalendarId?: SortOrderInput | SortOrder
    googleAuth?: GoogleAuthOrderByWithRelationInput
    intimacoes?: IntimacaoOrderByRelationAggregateInput
    processos?: ProcessoOrderByRelationAggregateInput
  }

  export type AdvogadoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    oab?: string
    email?: string
    AND?: AdvogadoWhereInput | AdvogadoWhereInput[]
    OR?: AdvogadoWhereInput[]
    NOT?: AdvogadoWhereInput | AdvogadoWhereInput[]
    nome?: StringFilter<"Advogado"> | string
    telefone?: StringFilter<"Advogado"> | string
    ativo?: BoolFilter<"Advogado"> | boolean
    createdAt?: DateTimeFilter<"Advogado"> | Date | string
    updatedAt?: DateTimeFilter<"Advogado"> | Date | string
    googleCalendarId?: StringNullableFilter<"Advogado"> | string | null
    googleAuth?: XOR<GoogleAuthNullableScalarRelationFilter, GoogleAuthWhereInput> | null
    intimacoes?: IntimacaoListRelationFilter
    processos?: ProcessoListRelationFilter
  }, "id" | "oab" | "email">

  export type AdvogadoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    oab?: SortOrder
    telefone?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    googleCalendarId?: SortOrderInput | SortOrder
    _count?: AdvogadoCountOrderByAggregateInput
    _max?: AdvogadoMaxOrderByAggregateInput
    _min?: AdvogadoMinOrderByAggregateInput
  }

  export type AdvogadoScalarWhereWithAggregatesInput = {
    AND?: AdvogadoScalarWhereWithAggregatesInput | AdvogadoScalarWhereWithAggregatesInput[]
    OR?: AdvogadoScalarWhereWithAggregatesInput[]
    NOT?: AdvogadoScalarWhereWithAggregatesInput | AdvogadoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Advogado"> | string
    nome?: StringWithAggregatesFilter<"Advogado"> | string
    oab?: StringWithAggregatesFilter<"Advogado"> | string
    telefone?: StringWithAggregatesFilter<"Advogado"> | string
    ativo?: BoolWithAggregatesFilter<"Advogado"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Advogado"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Advogado"> | Date | string
    email?: StringWithAggregatesFilter<"Advogado"> | string
    googleCalendarId?: StringNullableWithAggregatesFilter<"Advogado"> | string | null
  }

  export type ProcessoWhereInput = {
    AND?: ProcessoWhereInput | ProcessoWhereInput[]
    OR?: ProcessoWhereInput[]
    NOT?: ProcessoWhereInput | ProcessoWhereInput[]
    id?: StringFilter<"Processo"> | string
    numeroProcesso?: StringFilter<"Processo"> | string
    vara?: StringFilter<"Processo"> | string
    tribunal?: StringFilter<"Processo"> | string
    status?: StringFilter<"Processo"> | string
    createdAt?: DateTimeFilter<"Processo"> | Date | string
    updatedAt?: DateTimeFilter<"Processo"> | Date | string
    intimacoes?: IntimacaoListRelationFilter
    advogados?: AdvogadoListRelationFilter
  }

  export type ProcessoOrderByWithRelationInput = {
    id?: SortOrder
    numeroProcesso?: SortOrder
    vara?: SortOrder
    tribunal?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    intimacoes?: IntimacaoOrderByRelationAggregateInput
    advogados?: AdvogadoOrderByRelationAggregateInput
  }

  export type ProcessoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    numeroProcesso?: string
    AND?: ProcessoWhereInput | ProcessoWhereInput[]
    OR?: ProcessoWhereInput[]
    NOT?: ProcessoWhereInput | ProcessoWhereInput[]
    vara?: StringFilter<"Processo"> | string
    tribunal?: StringFilter<"Processo"> | string
    status?: StringFilter<"Processo"> | string
    createdAt?: DateTimeFilter<"Processo"> | Date | string
    updatedAt?: DateTimeFilter<"Processo"> | Date | string
    intimacoes?: IntimacaoListRelationFilter
    advogados?: AdvogadoListRelationFilter
  }, "id" | "numeroProcesso">

  export type ProcessoOrderByWithAggregationInput = {
    id?: SortOrder
    numeroProcesso?: SortOrder
    vara?: SortOrder
    tribunal?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProcessoCountOrderByAggregateInput
    _max?: ProcessoMaxOrderByAggregateInput
    _min?: ProcessoMinOrderByAggregateInput
  }

  export type ProcessoScalarWhereWithAggregatesInput = {
    AND?: ProcessoScalarWhereWithAggregatesInput | ProcessoScalarWhereWithAggregatesInput[]
    OR?: ProcessoScalarWhereWithAggregatesInput[]
    NOT?: ProcessoScalarWhereWithAggregatesInput | ProcessoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Processo"> | string
    numeroProcesso?: StringWithAggregatesFilter<"Processo"> | string
    vara?: StringWithAggregatesFilter<"Processo"> | string
    tribunal?: StringWithAggregatesFilter<"Processo"> | string
    status?: StringWithAggregatesFilter<"Processo"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Processo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Processo"> | Date | string
  }

  export type IntimacaoWhereInput = {
    AND?: IntimacaoWhereInput | IntimacaoWhereInput[]
    OR?: IntimacaoWhereInput[]
    NOT?: IntimacaoWhereInput | IntimacaoWhereInput[]
    id?: StringFilter<"Intimacao"> | string
    processoId?: StringFilter<"Intimacao"> | string
    advogadoId?: StringFilter<"Intimacao"> | string
    dataPublicacao?: DateTimeFilter<"Intimacao"> | Date | string
    prazo?: IntFilter<"Intimacao"> | number
    dataLimite?: DateTimeFilter<"Intimacao"> | Date | string
    conteudo?: StringFilter<"Intimacao"> | string
    resumoIA?: StringNullableFilter<"Intimacao"> | string | null
    status?: StringFilter<"Intimacao"> | string
    googleEventId?: StringNullableFilter<"Intimacao"> | string | null
    createdAt?: DateTimeFilter<"Intimacao"> | Date | string
    updatedAt?: DateTimeFilter<"Intimacao"> | Date | string
    processo?: XOR<ProcessoScalarRelationFilter, ProcessoWhereInput>
    advogado?: XOR<AdvogadoScalarRelationFilter, AdvogadoWhereInput>
    Notificacao?: NotificacaoListRelationFilter
  }

  export type IntimacaoOrderByWithRelationInput = {
    id?: SortOrder
    processoId?: SortOrder
    advogadoId?: SortOrder
    dataPublicacao?: SortOrder
    prazo?: SortOrder
    dataLimite?: SortOrder
    conteudo?: SortOrder
    resumoIA?: SortOrderInput | SortOrder
    status?: SortOrder
    googleEventId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    processo?: ProcessoOrderByWithRelationInput
    advogado?: AdvogadoOrderByWithRelationInput
    Notificacao?: NotificacaoOrderByRelationAggregateInput
  }

  export type IntimacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    googleEventId?: string
    AND?: IntimacaoWhereInput | IntimacaoWhereInput[]
    OR?: IntimacaoWhereInput[]
    NOT?: IntimacaoWhereInput | IntimacaoWhereInput[]
    processoId?: StringFilter<"Intimacao"> | string
    advogadoId?: StringFilter<"Intimacao"> | string
    dataPublicacao?: DateTimeFilter<"Intimacao"> | Date | string
    prazo?: IntFilter<"Intimacao"> | number
    dataLimite?: DateTimeFilter<"Intimacao"> | Date | string
    conteudo?: StringFilter<"Intimacao"> | string
    resumoIA?: StringNullableFilter<"Intimacao"> | string | null
    status?: StringFilter<"Intimacao"> | string
    createdAt?: DateTimeFilter<"Intimacao"> | Date | string
    updatedAt?: DateTimeFilter<"Intimacao"> | Date | string
    processo?: XOR<ProcessoScalarRelationFilter, ProcessoWhereInput>
    advogado?: XOR<AdvogadoScalarRelationFilter, AdvogadoWhereInput>
    Notificacao?: NotificacaoListRelationFilter
  }, "id" | "googleEventId">

  export type IntimacaoOrderByWithAggregationInput = {
    id?: SortOrder
    processoId?: SortOrder
    advogadoId?: SortOrder
    dataPublicacao?: SortOrder
    prazo?: SortOrder
    dataLimite?: SortOrder
    conteudo?: SortOrder
    resumoIA?: SortOrderInput | SortOrder
    status?: SortOrder
    googleEventId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: IntimacaoCountOrderByAggregateInput
    _avg?: IntimacaoAvgOrderByAggregateInput
    _max?: IntimacaoMaxOrderByAggregateInput
    _min?: IntimacaoMinOrderByAggregateInput
    _sum?: IntimacaoSumOrderByAggregateInput
  }

  export type IntimacaoScalarWhereWithAggregatesInput = {
    AND?: IntimacaoScalarWhereWithAggregatesInput | IntimacaoScalarWhereWithAggregatesInput[]
    OR?: IntimacaoScalarWhereWithAggregatesInput[]
    NOT?: IntimacaoScalarWhereWithAggregatesInput | IntimacaoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Intimacao"> | string
    processoId?: StringWithAggregatesFilter<"Intimacao"> | string
    advogadoId?: StringWithAggregatesFilter<"Intimacao"> | string
    dataPublicacao?: DateTimeWithAggregatesFilter<"Intimacao"> | Date | string
    prazo?: IntWithAggregatesFilter<"Intimacao"> | number
    dataLimite?: DateTimeWithAggregatesFilter<"Intimacao"> | Date | string
    conteudo?: StringWithAggregatesFilter<"Intimacao"> | string
    resumoIA?: StringNullableWithAggregatesFilter<"Intimacao"> | string | null
    status?: StringWithAggregatesFilter<"Intimacao"> | string
    googleEventId?: StringNullableWithAggregatesFilter<"Intimacao"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Intimacao"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Intimacao"> | Date | string
  }

  export type NotificacaoWhereInput = {
    AND?: NotificacaoWhereInput | NotificacaoWhereInput[]
    OR?: NotificacaoWhereInput[]
    NOT?: NotificacaoWhereInput | NotificacaoWhereInput[]
    id?: StringFilter<"Notificacao"> | string
    intimacaoId?: StringFilter<"Notificacao"> | string
    tipo?: StringFilter<"Notificacao"> | string
    status?: StringFilter<"Notificacao"> | string
    dataEnvio?: DateTimeNullableFilter<"Notificacao"> | Date | string | null
    tentativas?: IntFilter<"Notificacao"> | number
    createdAt?: DateTimeFilter<"Notificacao"> | Date | string
    updatedAt?: DateTimeFilter<"Notificacao"> | Date | string
    intimacao?: XOR<IntimacaoScalarRelationFilter, IntimacaoWhereInput>
  }

  export type NotificacaoOrderByWithRelationInput = {
    id?: SortOrder
    intimacaoId?: SortOrder
    tipo?: SortOrder
    status?: SortOrder
    dataEnvio?: SortOrderInput | SortOrder
    tentativas?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    intimacao?: IntimacaoOrderByWithRelationInput
  }

  export type NotificacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificacaoWhereInput | NotificacaoWhereInput[]
    OR?: NotificacaoWhereInput[]
    NOT?: NotificacaoWhereInput | NotificacaoWhereInput[]
    intimacaoId?: StringFilter<"Notificacao"> | string
    tipo?: StringFilter<"Notificacao"> | string
    status?: StringFilter<"Notificacao"> | string
    dataEnvio?: DateTimeNullableFilter<"Notificacao"> | Date | string | null
    tentativas?: IntFilter<"Notificacao"> | number
    createdAt?: DateTimeFilter<"Notificacao"> | Date | string
    updatedAt?: DateTimeFilter<"Notificacao"> | Date | string
    intimacao?: XOR<IntimacaoScalarRelationFilter, IntimacaoWhereInput>
  }, "id">

  export type NotificacaoOrderByWithAggregationInput = {
    id?: SortOrder
    intimacaoId?: SortOrder
    tipo?: SortOrder
    status?: SortOrder
    dataEnvio?: SortOrderInput | SortOrder
    tentativas?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NotificacaoCountOrderByAggregateInput
    _avg?: NotificacaoAvgOrderByAggregateInput
    _max?: NotificacaoMaxOrderByAggregateInput
    _min?: NotificacaoMinOrderByAggregateInput
    _sum?: NotificacaoSumOrderByAggregateInput
  }

  export type NotificacaoScalarWhereWithAggregatesInput = {
    AND?: NotificacaoScalarWhereWithAggregatesInput | NotificacaoScalarWhereWithAggregatesInput[]
    OR?: NotificacaoScalarWhereWithAggregatesInput[]
    NOT?: NotificacaoScalarWhereWithAggregatesInput | NotificacaoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notificacao"> | string
    intimacaoId?: StringWithAggregatesFilter<"Notificacao"> | string
    tipo?: StringWithAggregatesFilter<"Notificacao"> | string
    status?: StringWithAggregatesFilter<"Notificacao"> | string
    dataEnvio?: DateTimeNullableWithAggregatesFilter<"Notificacao"> | Date | string | null
    tentativas?: IntWithAggregatesFilter<"Notificacao"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Notificacao"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Notificacao"> | Date | string
  }

  export type GoogleAuthWhereInput = {
    AND?: GoogleAuthWhereInput | GoogleAuthWhereInput[]
    OR?: GoogleAuthWhereInput[]
    NOT?: GoogleAuthWhereInput | GoogleAuthWhereInput[]
    id?: StringFilter<"GoogleAuth"> | string
    advogadoId?: StringFilter<"GoogleAuth"> | string
    accessToken?: StringFilter<"GoogleAuth"> | string
    refreshToken?: StringFilter<"GoogleAuth"> | string
    expiresAt?: DateTimeFilter<"GoogleAuth"> | Date | string
    scope?: StringFilter<"GoogleAuth"> | string
    createdAt?: DateTimeFilter<"GoogleAuth"> | Date | string
    updatedAt?: DateTimeFilter<"GoogleAuth"> | Date | string
    advogado?: XOR<AdvogadoScalarRelationFilter, AdvogadoWhereInput>
  }

  export type GoogleAuthOrderByWithRelationInput = {
    id?: SortOrder
    advogadoId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    scope?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    advogado?: AdvogadoOrderByWithRelationInput
  }

  export type GoogleAuthWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    advogadoId?: string
    AND?: GoogleAuthWhereInput | GoogleAuthWhereInput[]
    OR?: GoogleAuthWhereInput[]
    NOT?: GoogleAuthWhereInput | GoogleAuthWhereInput[]
    accessToken?: StringFilter<"GoogleAuth"> | string
    refreshToken?: StringFilter<"GoogleAuth"> | string
    expiresAt?: DateTimeFilter<"GoogleAuth"> | Date | string
    scope?: StringFilter<"GoogleAuth"> | string
    createdAt?: DateTimeFilter<"GoogleAuth"> | Date | string
    updatedAt?: DateTimeFilter<"GoogleAuth"> | Date | string
    advogado?: XOR<AdvogadoScalarRelationFilter, AdvogadoWhereInput>
  }, "id" | "advogadoId">

  export type GoogleAuthOrderByWithAggregationInput = {
    id?: SortOrder
    advogadoId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    scope?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GoogleAuthCountOrderByAggregateInput
    _max?: GoogleAuthMaxOrderByAggregateInput
    _min?: GoogleAuthMinOrderByAggregateInput
  }

  export type GoogleAuthScalarWhereWithAggregatesInput = {
    AND?: GoogleAuthScalarWhereWithAggregatesInput | GoogleAuthScalarWhereWithAggregatesInput[]
    OR?: GoogleAuthScalarWhereWithAggregatesInput[]
    NOT?: GoogleAuthScalarWhereWithAggregatesInput | GoogleAuthScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GoogleAuth"> | string
    advogadoId?: StringWithAggregatesFilter<"GoogleAuth"> | string
    accessToken?: StringWithAggregatesFilter<"GoogleAuth"> | string
    refreshToken?: StringWithAggregatesFilter<"GoogleAuth"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"GoogleAuth"> | Date | string
    scope?: StringWithAggregatesFilter<"GoogleAuth"> | string
    createdAt?: DateTimeWithAggregatesFilter<"GoogleAuth"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GoogleAuth"> | Date | string
  }

  export type ExecucaoLogWhereInput = {
    AND?: ExecucaoLogWhereInput | ExecucaoLogWhereInput[]
    OR?: ExecucaoLogWhereInput[]
    NOT?: ExecucaoLogWhereInput | ExecucaoLogWhereInput[]
    id?: StringFilter<"ExecucaoLog"> | string
    dataExecucao?: DateTimeFilter<"ExecucaoLog"> | Date | string
    status?: StringFilter<"ExecucaoLog"> | string
    qtdIntimacoes?: IntFilter<"ExecucaoLog"> | number
    qtdProcessada?: IntFilter<"ExecucaoLog"> | number
    erro?: StringNullableFilter<"ExecucaoLog"> | string | null
    advogado?: StringFilter<"ExecucaoLog"> | string
    dataConsulta?: DateTimeFilter<"ExecucaoLog"> | Date | string
  }

  export type ExecucaoLogOrderByWithRelationInput = {
    id?: SortOrder
    dataExecucao?: SortOrder
    status?: SortOrder
    qtdIntimacoes?: SortOrder
    qtdProcessada?: SortOrder
    erro?: SortOrderInput | SortOrder
    advogado?: SortOrder
    dataConsulta?: SortOrder
  }

  export type ExecucaoLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExecucaoLogWhereInput | ExecucaoLogWhereInput[]
    OR?: ExecucaoLogWhereInput[]
    NOT?: ExecucaoLogWhereInput | ExecucaoLogWhereInput[]
    dataExecucao?: DateTimeFilter<"ExecucaoLog"> | Date | string
    status?: StringFilter<"ExecucaoLog"> | string
    qtdIntimacoes?: IntFilter<"ExecucaoLog"> | number
    qtdProcessada?: IntFilter<"ExecucaoLog"> | number
    erro?: StringNullableFilter<"ExecucaoLog"> | string | null
    advogado?: StringFilter<"ExecucaoLog"> | string
    dataConsulta?: DateTimeFilter<"ExecucaoLog"> | Date | string
  }, "id">

  export type ExecucaoLogOrderByWithAggregationInput = {
    id?: SortOrder
    dataExecucao?: SortOrder
    status?: SortOrder
    qtdIntimacoes?: SortOrder
    qtdProcessada?: SortOrder
    erro?: SortOrderInput | SortOrder
    advogado?: SortOrder
    dataConsulta?: SortOrder
    _count?: ExecucaoLogCountOrderByAggregateInput
    _avg?: ExecucaoLogAvgOrderByAggregateInput
    _max?: ExecucaoLogMaxOrderByAggregateInput
    _min?: ExecucaoLogMinOrderByAggregateInput
    _sum?: ExecucaoLogSumOrderByAggregateInput
  }

  export type ExecucaoLogScalarWhereWithAggregatesInput = {
    AND?: ExecucaoLogScalarWhereWithAggregatesInput | ExecucaoLogScalarWhereWithAggregatesInput[]
    OR?: ExecucaoLogScalarWhereWithAggregatesInput[]
    NOT?: ExecucaoLogScalarWhereWithAggregatesInput | ExecucaoLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExecucaoLog"> | string
    dataExecucao?: DateTimeWithAggregatesFilter<"ExecucaoLog"> | Date | string
    status?: StringWithAggregatesFilter<"ExecucaoLog"> | string
    qtdIntimacoes?: IntWithAggregatesFilter<"ExecucaoLog"> | number
    qtdProcessada?: IntWithAggregatesFilter<"ExecucaoLog"> | number
    erro?: StringNullableWithAggregatesFilter<"ExecucaoLog"> | string | null
    advogado?: StringWithAggregatesFilter<"ExecucaoLog"> | string
    dataConsulta?: DateTimeWithAggregatesFilter<"ExecucaoLog"> | Date | string
  }

  export type FeriadoWhereInput = {
    AND?: FeriadoWhereInput | FeriadoWhereInput[]
    OR?: FeriadoWhereInput[]
    NOT?: FeriadoWhereInput | FeriadoWhereInput[]
    id?: StringFilter<"Feriado"> | string
    siglaTribunal?: StringFilter<"Feriado"> | string
    data?: DateTimeFilter<"Feriado"> | Date | string
  }

  export type FeriadoOrderByWithRelationInput = {
    id?: SortOrder
    siglaTribunal?: SortOrder
    data?: SortOrder
  }

  export type FeriadoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FeriadoWhereInput | FeriadoWhereInput[]
    OR?: FeriadoWhereInput[]
    NOT?: FeriadoWhereInput | FeriadoWhereInput[]
    siglaTribunal?: StringFilter<"Feriado"> | string
    data?: DateTimeFilter<"Feriado"> | Date | string
  }, "id">

  export type FeriadoOrderByWithAggregationInput = {
    id?: SortOrder
    siglaTribunal?: SortOrder
    data?: SortOrder
    _count?: FeriadoCountOrderByAggregateInput
    _max?: FeriadoMaxOrderByAggregateInput
    _min?: FeriadoMinOrderByAggregateInput
  }

  export type FeriadoScalarWhereWithAggregatesInput = {
    AND?: FeriadoScalarWhereWithAggregatesInput | FeriadoScalarWhereWithAggregatesInput[]
    OR?: FeriadoScalarWhereWithAggregatesInput[]
    NOT?: FeriadoScalarWhereWithAggregatesInput | FeriadoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Feriado"> | string
    siglaTribunal?: StringWithAggregatesFilter<"Feriado"> | string
    data?: DateTimeWithAggregatesFilter<"Feriado"> | Date | string
  }

  export type AdvogadoCreateInput = {
    id?: string
    nome: string
    oab: string
    telefone: string
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    googleCalendarId?: string | null
    googleAuth?: GoogleAuthCreateNestedOneWithoutAdvogadoInput
    intimacoes?: IntimacaoCreateNestedManyWithoutAdvogadoInput
    processos?: ProcessoCreateNestedManyWithoutAdvogadosInput
  }

  export type AdvogadoUncheckedCreateInput = {
    id?: string
    nome: string
    oab: string
    telefone: string
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    googleCalendarId?: string | null
    googleAuth?: GoogleAuthUncheckedCreateNestedOneWithoutAdvogadoInput
    intimacoes?: IntimacaoUncheckedCreateNestedManyWithoutAdvogadoInput
    processos?: ProcessoUncheckedCreateNestedManyWithoutAdvogadosInput
  }

  export type AdvogadoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    oab?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    googleCalendarId?: NullableStringFieldUpdateOperationsInput | string | null
    googleAuth?: GoogleAuthUpdateOneWithoutAdvogadoNestedInput
    intimacoes?: IntimacaoUpdateManyWithoutAdvogadoNestedInput
    processos?: ProcessoUpdateManyWithoutAdvogadosNestedInput
  }

  export type AdvogadoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    oab?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    googleCalendarId?: NullableStringFieldUpdateOperationsInput | string | null
    googleAuth?: GoogleAuthUncheckedUpdateOneWithoutAdvogadoNestedInput
    intimacoes?: IntimacaoUncheckedUpdateManyWithoutAdvogadoNestedInput
    processos?: ProcessoUncheckedUpdateManyWithoutAdvogadosNestedInput
  }

  export type AdvogadoCreateManyInput = {
    id?: string
    nome: string
    oab: string
    telefone: string
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    googleCalendarId?: string | null
  }

  export type AdvogadoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    oab?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    googleCalendarId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdvogadoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    oab?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    googleCalendarId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProcessoCreateInput = {
    id?: string
    numeroProcesso: string
    vara: string
    tribunal: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    intimacoes?: IntimacaoCreateNestedManyWithoutProcessoInput
    advogados?: AdvogadoCreateNestedManyWithoutProcessosInput
  }

  export type ProcessoUncheckedCreateInput = {
    id?: string
    numeroProcesso: string
    vara: string
    tribunal: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    intimacoes?: IntimacaoUncheckedCreateNestedManyWithoutProcessoInput
    advogados?: AdvogadoUncheckedCreateNestedManyWithoutProcessosInput
  }

  export type ProcessoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    numeroProcesso?: StringFieldUpdateOperationsInput | string
    vara?: StringFieldUpdateOperationsInput | string
    tribunal?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    intimacoes?: IntimacaoUpdateManyWithoutProcessoNestedInput
    advogados?: AdvogadoUpdateManyWithoutProcessosNestedInput
  }

  export type ProcessoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    numeroProcesso?: StringFieldUpdateOperationsInput | string
    vara?: StringFieldUpdateOperationsInput | string
    tribunal?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    intimacoes?: IntimacaoUncheckedUpdateManyWithoutProcessoNestedInput
    advogados?: AdvogadoUncheckedUpdateManyWithoutProcessosNestedInput
  }

  export type ProcessoCreateManyInput = {
    id?: string
    numeroProcesso: string
    vara: string
    tribunal: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProcessoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    numeroProcesso?: StringFieldUpdateOperationsInput | string
    vara?: StringFieldUpdateOperationsInput | string
    tribunal?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcessoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    numeroProcesso?: StringFieldUpdateOperationsInput | string
    vara?: StringFieldUpdateOperationsInput | string
    tribunal?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntimacaoCreateInput = {
    id?: string
    dataPublicacao: Date | string
    prazo: number
    dataLimite: Date | string
    conteudo: string
    resumoIA?: string | null
    status: string
    googleEventId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    processo: ProcessoCreateNestedOneWithoutIntimacoesInput
    advogado: AdvogadoCreateNestedOneWithoutIntimacoesInput
    Notificacao?: NotificacaoCreateNestedManyWithoutIntimacaoInput
  }

  export type IntimacaoUncheckedCreateInput = {
    id?: string
    processoId: string
    advogadoId: string
    dataPublicacao: Date | string
    prazo: number
    dataLimite: Date | string
    conteudo: string
    resumoIA?: string | null
    status: string
    googleEventId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Notificacao?: NotificacaoUncheckedCreateNestedManyWithoutIntimacaoInput
  }

  export type IntimacaoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    prazo?: IntFieldUpdateOperationsInput | number
    dataLimite?: DateTimeFieldUpdateOperationsInput | Date | string
    conteudo?: StringFieldUpdateOperationsInput | string
    resumoIA?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    googleEventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processo?: ProcessoUpdateOneRequiredWithoutIntimacoesNestedInput
    advogado?: AdvogadoUpdateOneRequiredWithoutIntimacoesNestedInput
    Notificacao?: NotificacaoUpdateManyWithoutIntimacaoNestedInput
  }

  export type IntimacaoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    processoId?: StringFieldUpdateOperationsInput | string
    advogadoId?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    prazo?: IntFieldUpdateOperationsInput | number
    dataLimite?: DateTimeFieldUpdateOperationsInput | Date | string
    conteudo?: StringFieldUpdateOperationsInput | string
    resumoIA?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    googleEventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Notificacao?: NotificacaoUncheckedUpdateManyWithoutIntimacaoNestedInput
  }

  export type IntimacaoCreateManyInput = {
    id?: string
    processoId: string
    advogadoId: string
    dataPublicacao: Date | string
    prazo: number
    dataLimite: Date | string
    conteudo: string
    resumoIA?: string | null
    status: string
    googleEventId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IntimacaoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    prazo?: IntFieldUpdateOperationsInput | number
    dataLimite?: DateTimeFieldUpdateOperationsInput | Date | string
    conteudo?: StringFieldUpdateOperationsInput | string
    resumoIA?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    googleEventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntimacaoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    processoId?: StringFieldUpdateOperationsInput | string
    advogadoId?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    prazo?: IntFieldUpdateOperationsInput | number
    dataLimite?: DateTimeFieldUpdateOperationsInput | Date | string
    conteudo?: StringFieldUpdateOperationsInput | string
    resumoIA?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    googleEventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacaoCreateInput = {
    id?: string
    tipo: string
    status: string
    dataEnvio?: Date | string | null
    tentativas?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    intimacao: IntimacaoCreateNestedOneWithoutNotificacaoInput
  }

  export type NotificacaoUncheckedCreateInput = {
    id?: string
    intimacaoId: string
    tipo: string
    status: string
    dataEnvio?: Date | string | null
    tentativas?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificacaoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dataEnvio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tentativas?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    intimacao?: IntimacaoUpdateOneRequiredWithoutNotificacaoNestedInput
  }

  export type NotificacaoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    intimacaoId?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dataEnvio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tentativas?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacaoCreateManyInput = {
    id?: string
    intimacaoId: string
    tipo: string
    status: string
    dataEnvio?: Date | string | null
    tentativas?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificacaoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dataEnvio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tentativas?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacaoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    intimacaoId?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dataEnvio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tentativas?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoogleAuthCreateInput = {
    id?: string
    accessToken: string
    refreshToken: string
    expiresAt: Date | string
    scope: string
    createdAt?: Date | string
    updatedAt?: Date | string
    advogado: AdvogadoCreateNestedOneWithoutGoogleAuthInput
  }

  export type GoogleAuthUncheckedCreateInput = {
    id?: string
    advogadoId: string
    accessToken: string
    refreshToken: string
    expiresAt: Date | string
    scope: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoogleAuthUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    advogado?: AdvogadoUpdateOneRequiredWithoutGoogleAuthNestedInput
  }

  export type GoogleAuthUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    advogadoId?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoogleAuthCreateManyInput = {
    id?: string
    advogadoId: string
    accessToken: string
    refreshToken: string
    expiresAt: Date | string
    scope: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoogleAuthUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoogleAuthUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    advogadoId?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExecucaoLogCreateInput = {
    id?: string
    dataExecucao?: Date | string
    status: string
    qtdIntimacoes?: number
    qtdProcessada?: number
    erro?: string | null
    advogado: string
    dataConsulta: Date | string
  }

  export type ExecucaoLogUncheckedCreateInput = {
    id?: string
    dataExecucao?: Date | string
    status: string
    qtdIntimacoes?: number
    qtdProcessada?: number
    erro?: string | null
    advogado: string
    dataConsulta: Date | string
  }

  export type ExecucaoLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataExecucao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    qtdIntimacoes?: IntFieldUpdateOperationsInput | number
    qtdProcessada?: IntFieldUpdateOperationsInput | number
    erro?: NullableStringFieldUpdateOperationsInput | string | null
    advogado?: StringFieldUpdateOperationsInput | string
    dataConsulta?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExecucaoLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataExecucao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    qtdIntimacoes?: IntFieldUpdateOperationsInput | number
    qtdProcessada?: IntFieldUpdateOperationsInput | number
    erro?: NullableStringFieldUpdateOperationsInput | string | null
    advogado?: StringFieldUpdateOperationsInput | string
    dataConsulta?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExecucaoLogCreateManyInput = {
    id?: string
    dataExecucao?: Date | string
    status: string
    qtdIntimacoes?: number
    qtdProcessada?: number
    erro?: string | null
    advogado: string
    dataConsulta: Date | string
  }

  export type ExecucaoLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataExecucao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    qtdIntimacoes?: IntFieldUpdateOperationsInput | number
    qtdProcessada?: IntFieldUpdateOperationsInput | number
    erro?: NullableStringFieldUpdateOperationsInput | string | null
    advogado?: StringFieldUpdateOperationsInput | string
    dataConsulta?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExecucaoLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataExecucao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    qtdIntimacoes?: IntFieldUpdateOperationsInput | number
    qtdProcessada?: IntFieldUpdateOperationsInput | number
    erro?: NullableStringFieldUpdateOperationsInput | string | null
    advogado?: StringFieldUpdateOperationsInput | string
    dataConsulta?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeriadoCreateInput = {
    id?: string
    siglaTribunal: string
    data: Date | string
  }

  export type FeriadoUncheckedCreateInput = {
    id?: string
    siglaTribunal: string
    data: Date | string
  }

  export type FeriadoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    siglaTribunal?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeriadoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    siglaTribunal?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeriadoCreateManyInput = {
    id?: string
    siglaTribunal: string
    data: Date | string
  }

  export type FeriadoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    siglaTribunal?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeriadoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    siglaTribunal?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type GoogleAuthNullableScalarRelationFilter = {
    is?: GoogleAuthWhereInput | null
    isNot?: GoogleAuthWhereInput | null
  }

  export type IntimacaoListRelationFilter = {
    every?: IntimacaoWhereInput
    some?: IntimacaoWhereInput
    none?: IntimacaoWhereInput
  }

  export type ProcessoListRelationFilter = {
    every?: ProcessoWhereInput
    some?: ProcessoWhereInput
    none?: ProcessoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type IntimacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProcessoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdvogadoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    oab?: SortOrder
    telefone?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    googleCalendarId?: SortOrder
  }

  export type AdvogadoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    oab?: SortOrder
    telefone?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    googleCalendarId?: SortOrder
  }

  export type AdvogadoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    oab?: SortOrder
    telefone?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    googleCalendarId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type AdvogadoListRelationFilter = {
    every?: AdvogadoWhereInput
    some?: AdvogadoWhereInput
    none?: AdvogadoWhereInput
  }

  export type AdvogadoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProcessoCountOrderByAggregateInput = {
    id?: SortOrder
    numeroProcesso?: SortOrder
    vara?: SortOrder
    tribunal?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProcessoMaxOrderByAggregateInput = {
    id?: SortOrder
    numeroProcesso?: SortOrder
    vara?: SortOrder
    tribunal?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProcessoMinOrderByAggregateInput = {
    id?: SortOrder
    numeroProcesso?: SortOrder
    vara?: SortOrder
    tribunal?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ProcessoScalarRelationFilter = {
    is?: ProcessoWhereInput
    isNot?: ProcessoWhereInput
  }

  export type AdvogadoScalarRelationFilter = {
    is?: AdvogadoWhereInput
    isNot?: AdvogadoWhereInput
  }

  export type NotificacaoListRelationFilter = {
    every?: NotificacaoWhereInput
    some?: NotificacaoWhereInput
    none?: NotificacaoWhereInput
  }

  export type NotificacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IntimacaoCountOrderByAggregateInput = {
    id?: SortOrder
    processoId?: SortOrder
    advogadoId?: SortOrder
    dataPublicacao?: SortOrder
    prazo?: SortOrder
    dataLimite?: SortOrder
    conteudo?: SortOrder
    resumoIA?: SortOrder
    status?: SortOrder
    googleEventId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntimacaoAvgOrderByAggregateInput = {
    prazo?: SortOrder
  }

  export type IntimacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    processoId?: SortOrder
    advogadoId?: SortOrder
    dataPublicacao?: SortOrder
    prazo?: SortOrder
    dataLimite?: SortOrder
    conteudo?: SortOrder
    resumoIA?: SortOrder
    status?: SortOrder
    googleEventId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntimacaoMinOrderByAggregateInput = {
    id?: SortOrder
    processoId?: SortOrder
    advogadoId?: SortOrder
    dataPublicacao?: SortOrder
    prazo?: SortOrder
    dataLimite?: SortOrder
    conteudo?: SortOrder
    resumoIA?: SortOrder
    status?: SortOrder
    googleEventId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntimacaoSumOrderByAggregateInput = {
    prazo?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntimacaoScalarRelationFilter = {
    is?: IntimacaoWhereInput
    isNot?: IntimacaoWhereInput
  }

  export type NotificacaoCountOrderByAggregateInput = {
    id?: SortOrder
    intimacaoId?: SortOrder
    tipo?: SortOrder
    status?: SortOrder
    dataEnvio?: SortOrder
    tentativas?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificacaoAvgOrderByAggregateInput = {
    tentativas?: SortOrder
  }

  export type NotificacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    intimacaoId?: SortOrder
    tipo?: SortOrder
    status?: SortOrder
    dataEnvio?: SortOrder
    tentativas?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificacaoMinOrderByAggregateInput = {
    id?: SortOrder
    intimacaoId?: SortOrder
    tipo?: SortOrder
    status?: SortOrder
    dataEnvio?: SortOrder
    tentativas?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificacaoSumOrderByAggregateInput = {
    tentativas?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type GoogleAuthCountOrderByAggregateInput = {
    id?: SortOrder
    advogadoId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    scope?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GoogleAuthMaxOrderByAggregateInput = {
    id?: SortOrder
    advogadoId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    scope?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GoogleAuthMinOrderByAggregateInput = {
    id?: SortOrder
    advogadoId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    scope?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExecucaoLogCountOrderByAggregateInput = {
    id?: SortOrder
    dataExecucao?: SortOrder
    status?: SortOrder
    qtdIntimacoes?: SortOrder
    qtdProcessada?: SortOrder
    erro?: SortOrder
    advogado?: SortOrder
    dataConsulta?: SortOrder
  }

  export type ExecucaoLogAvgOrderByAggregateInput = {
    qtdIntimacoes?: SortOrder
    qtdProcessada?: SortOrder
  }

  export type ExecucaoLogMaxOrderByAggregateInput = {
    id?: SortOrder
    dataExecucao?: SortOrder
    status?: SortOrder
    qtdIntimacoes?: SortOrder
    qtdProcessada?: SortOrder
    erro?: SortOrder
    advogado?: SortOrder
    dataConsulta?: SortOrder
  }

  export type ExecucaoLogMinOrderByAggregateInput = {
    id?: SortOrder
    dataExecucao?: SortOrder
    status?: SortOrder
    qtdIntimacoes?: SortOrder
    qtdProcessada?: SortOrder
    erro?: SortOrder
    advogado?: SortOrder
    dataConsulta?: SortOrder
  }

  export type ExecucaoLogSumOrderByAggregateInput = {
    qtdIntimacoes?: SortOrder
    qtdProcessada?: SortOrder
  }

  export type FeriadoCountOrderByAggregateInput = {
    id?: SortOrder
    siglaTribunal?: SortOrder
    data?: SortOrder
  }

  export type FeriadoMaxOrderByAggregateInput = {
    id?: SortOrder
    siglaTribunal?: SortOrder
    data?: SortOrder
  }

  export type FeriadoMinOrderByAggregateInput = {
    id?: SortOrder
    siglaTribunal?: SortOrder
    data?: SortOrder
  }

  export type GoogleAuthCreateNestedOneWithoutAdvogadoInput = {
    create?: XOR<GoogleAuthCreateWithoutAdvogadoInput, GoogleAuthUncheckedCreateWithoutAdvogadoInput>
    connectOrCreate?: GoogleAuthCreateOrConnectWithoutAdvogadoInput
    connect?: GoogleAuthWhereUniqueInput
  }

  export type IntimacaoCreateNestedManyWithoutAdvogadoInput = {
    create?: XOR<IntimacaoCreateWithoutAdvogadoInput, IntimacaoUncheckedCreateWithoutAdvogadoInput> | IntimacaoCreateWithoutAdvogadoInput[] | IntimacaoUncheckedCreateWithoutAdvogadoInput[]
    connectOrCreate?: IntimacaoCreateOrConnectWithoutAdvogadoInput | IntimacaoCreateOrConnectWithoutAdvogadoInput[]
    createMany?: IntimacaoCreateManyAdvogadoInputEnvelope
    connect?: IntimacaoWhereUniqueInput | IntimacaoWhereUniqueInput[]
  }

  export type ProcessoCreateNestedManyWithoutAdvogadosInput = {
    create?: XOR<ProcessoCreateWithoutAdvogadosInput, ProcessoUncheckedCreateWithoutAdvogadosInput> | ProcessoCreateWithoutAdvogadosInput[] | ProcessoUncheckedCreateWithoutAdvogadosInput[]
    connectOrCreate?: ProcessoCreateOrConnectWithoutAdvogadosInput | ProcessoCreateOrConnectWithoutAdvogadosInput[]
    connect?: ProcessoWhereUniqueInput | ProcessoWhereUniqueInput[]
  }

  export type GoogleAuthUncheckedCreateNestedOneWithoutAdvogadoInput = {
    create?: XOR<GoogleAuthCreateWithoutAdvogadoInput, GoogleAuthUncheckedCreateWithoutAdvogadoInput>
    connectOrCreate?: GoogleAuthCreateOrConnectWithoutAdvogadoInput
    connect?: GoogleAuthWhereUniqueInput
  }

  export type IntimacaoUncheckedCreateNestedManyWithoutAdvogadoInput = {
    create?: XOR<IntimacaoCreateWithoutAdvogadoInput, IntimacaoUncheckedCreateWithoutAdvogadoInput> | IntimacaoCreateWithoutAdvogadoInput[] | IntimacaoUncheckedCreateWithoutAdvogadoInput[]
    connectOrCreate?: IntimacaoCreateOrConnectWithoutAdvogadoInput | IntimacaoCreateOrConnectWithoutAdvogadoInput[]
    createMany?: IntimacaoCreateManyAdvogadoInputEnvelope
    connect?: IntimacaoWhereUniqueInput | IntimacaoWhereUniqueInput[]
  }

  export type ProcessoUncheckedCreateNestedManyWithoutAdvogadosInput = {
    create?: XOR<ProcessoCreateWithoutAdvogadosInput, ProcessoUncheckedCreateWithoutAdvogadosInput> | ProcessoCreateWithoutAdvogadosInput[] | ProcessoUncheckedCreateWithoutAdvogadosInput[]
    connectOrCreate?: ProcessoCreateOrConnectWithoutAdvogadosInput | ProcessoCreateOrConnectWithoutAdvogadosInput[]
    connect?: ProcessoWhereUniqueInput | ProcessoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type GoogleAuthUpdateOneWithoutAdvogadoNestedInput = {
    create?: XOR<GoogleAuthCreateWithoutAdvogadoInput, GoogleAuthUncheckedCreateWithoutAdvogadoInput>
    connectOrCreate?: GoogleAuthCreateOrConnectWithoutAdvogadoInput
    upsert?: GoogleAuthUpsertWithoutAdvogadoInput
    disconnect?: GoogleAuthWhereInput | boolean
    delete?: GoogleAuthWhereInput | boolean
    connect?: GoogleAuthWhereUniqueInput
    update?: XOR<XOR<GoogleAuthUpdateToOneWithWhereWithoutAdvogadoInput, GoogleAuthUpdateWithoutAdvogadoInput>, GoogleAuthUncheckedUpdateWithoutAdvogadoInput>
  }

  export type IntimacaoUpdateManyWithoutAdvogadoNestedInput = {
    create?: XOR<IntimacaoCreateWithoutAdvogadoInput, IntimacaoUncheckedCreateWithoutAdvogadoInput> | IntimacaoCreateWithoutAdvogadoInput[] | IntimacaoUncheckedCreateWithoutAdvogadoInput[]
    connectOrCreate?: IntimacaoCreateOrConnectWithoutAdvogadoInput | IntimacaoCreateOrConnectWithoutAdvogadoInput[]
    upsert?: IntimacaoUpsertWithWhereUniqueWithoutAdvogadoInput | IntimacaoUpsertWithWhereUniqueWithoutAdvogadoInput[]
    createMany?: IntimacaoCreateManyAdvogadoInputEnvelope
    set?: IntimacaoWhereUniqueInput | IntimacaoWhereUniqueInput[]
    disconnect?: IntimacaoWhereUniqueInput | IntimacaoWhereUniqueInput[]
    delete?: IntimacaoWhereUniqueInput | IntimacaoWhereUniqueInput[]
    connect?: IntimacaoWhereUniqueInput | IntimacaoWhereUniqueInput[]
    update?: IntimacaoUpdateWithWhereUniqueWithoutAdvogadoInput | IntimacaoUpdateWithWhereUniqueWithoutAdvogadoInput[]
    updateMany?: IntimacaoUpdateManyWithWhereWithoutAdvogadoInput | IntimacaoUpdateManyWithWhereWithoutAdvogadoInput[]
    deleteMany?: IntimacaoScalarWhereInput | IntimacaoScalarWhereInput[]
  }

  export type ProcessoUpdateManyWithoutAdvogadosNestedInput = {
    create?: XOR<ProcessoCreateWithoutAdvogadosInput, ProcessoUncheckedCreateWithoutAdvogadosInput> | ProcessoCreateWithoutAdvogadosInput[] | ProcessoUncheckedCreateWithoutAdvogadosInput[]
    connectOrCreate?: ProcessoCreateOrConnectWithoutAdvogadosInput | ProcessoCreateOrConnectWithoutAdvogadosInput[]
    upsert?: ProcessoUpsertWithWhereUniqueWithoutAdvogadosInput | ProcessoUpsertWithWhereUniqueWithoutAdvogadosInput[]
    set?: ProcessoWhereUniqueInput | ProcessoWhereUniqueInput[]
    disconnect?: ProcessoWhereUniqueInput | ProcessoWhereUniqueInput[]
    delete?: ProcessoWhereUniqueInput | ProcessoWhereUniqueInput[]
    connect?: ProcessoWhereUniqueInput | ProcessoWhereUniqueInput[]
    update?: ProcessoUpdateWithWhereUniqueWithoutAdvogadosInput | ProcessoUpdateWithWhereUniqueWithoutAdvogadosInput[]
    updateMany?: ProcessoUpdateManyWithWhereWithoutAdvogadosInput | ProcessoUpdateManyWithWhereWithoutAdvogadosInput[]
    deleteMany?: ProcessoScalarWhereInput | ProcessoScalarWhereInput[]
  }

  export type GoogleAuthUncheckedUpdateOneWithoutAdvogadoNestedInput = {
    create?: XOR<GoogleAuthCreateWithoutAdvogadoInput, GoogleAuthUncheckedCreateWithoutAdvogadoInput>
    connectOrCreate?: GoogleAuthCreateOrConnectWithoutAdvogadoInput
    upsert?: GoogleAuthUpsertWithoutAdvogadoInput
    disconnect?: GoogleAuthWhereInput | boolean
    delete?: GoogleAuthWhereInput | boolean
    connect?: GoogleAuthWhereUniqueInput
    update?: XOR<XOR<GoogleAuthUpdateToOneWithWhereWithoutAdvogadoInput, GoogleAuthUpdateWithoutAdvogadoInput>, GoogleAuthUncheckedUpdateWithoutAdvogadoInput>
  }

  export type IntimacaoUncheckedUpdateManyWithoutAdvogadoNestedInput = {
    create?: XOR<IntimacaoCreateWithoutAdvogadoInput, IntimacaoUncheckedCreateWithoutAdvogadoInput> | IntimacaoCreateWithoutAdvogadoInput[] | IntimacaoUncheckedCreateWithoutAdvogadoInput[]
    connectOrCreate?: IntimacaoCreateOrConnectWithoutAdvogadoInput | IntimacaoCreateOrConnectWithoutAdvogadoInput[]
    upsert?: IntimacaoUpsertWithWhereUniqueWithoutAdvogadoInput | IntimacaoUpsertWithWhereUniqueWithoutAdvogadoInput[]
    createMany?: IntimacaoCreateManyAdvogadoInputEnvelope
    set?: IntimacaoWhereUniqueInput | IntimacaoWhereUniqueInput[]
    disconnect?: IntimacaoWhereUniqueInput | IntimacaoWhereUniqueInput[]
    delete?: IntimacaoWhereUniqueInput | IntimacaoWhereUniqueInput[]
    connect?: IntimacaoWhereUniqueInput | IntimacaoWhereUniqueInput[]
    update?: IntimacaoUpdateWithWhereUniqueWithoutAdvogadoInput | IntimacaoUpdateWithWhereUniqueWithoutAdvogadoInput[]
    updateMany?: IntimacaoUpdateManyWithWhereWithoutAdvogadoInput | IntimacaoUpdateManyWithWhereWithoutAdvogadoInput[]
    deleteMany?: IntimacaoScalarWhereInput | IntimacaoScalarWhereInput[]
  }

  export type ProcessoUncheckedUpdateManyWithoutAdvogadosNestedInput = {
    create?: XOR<ProcessoCreateWithoutAdvogadosInput, ProcessoUncheckedCreateWithoutAdvogadosInput> | ProcessoCreateWithoutAdvogadosInput[] | ProcessoUncheckedCreateWithoutAdvogadosInput[]
    connectOrCreate?: ProcessoCreateOrConnectWithoutAdvogadosInput | ProcessoCreateOrConnectWithoutAdvogadosInput[]
    upsert?: ProcessoUpsertWithWhereUniqueWithoutAdvogadosInput | ProcessoUpsertWithWhereUniqueWithoutAdvogadosInput[]
    set?: ProcessoWhereUniqueInput | ProcessoWhereUniqueInput[]
    disconnect?: ProcessoWhereUniqueInput | ProcessoWhereUniqueInput[]
    delete?: ProcessoWhereUniqueInput | ProcessoWhereUniqueInput[]
    connect?: ProcessoWhereUniqueInput | ProcessoWhereUniqueInput[]
    update?: ProcessoUpdateWithWhereUniqueWithoutAdvogadosInput | ProcessoUpdateWithWhereUniqueWithoutAdvogadosInput[]
    updateMany?: ProcessoUpdateManyWithWhereWithoutAdvogadosInput | ProcessoUpdateManyWithWhereWithoutAdvogadosInput[]
    deleteMany?: ProcessoScalarWhereInput | ProcessoScalarWhereInput[]
  }

  export type IntimacaoCreateNestedManyWithoutProcessoInput = {
    create?: XOR<IntimacaoCreateWithoutProcessoInput, IntimacaoUncheckedCreateWithoutProcessoInput> | IntimacaoCreateWithoutProcessoInput[] | IntimacaoUncheckedCreateWithoutProcessoInput[]
    connectOrCreate?: IntimacaoCreateOrConnectWithoutProcessoInput | IntimacaoCreateOrConnectWithoutProcessoInput[]
    createMany?: IntimacaoCreateManyProcessoInputEnvelope
    connect?: IntimacaoWhereUniqueInput | IntimacaoWhereUniqueInput[]
  }

  export type AdvogadoCreateNestedManyWithoutProcessosInput = {
    create?: XOR<AdvogadoCreateWithoutProcessosInput, AdvogadoUncheckedCreateWithoutProcessosInput> | AdvogadoCreateWithoutProcessosInput[] | AdvogadoUncheckedCreateWithoutProcessosInput[]
    connectOrCreate?: AdvogadoCreateOrConnectWithoutProcessosInput | AdvogadoCreateOrConnectWithoutProcessosInput[]
    connect?: AdvogadoWhereUniqueInput | AdvogadoWhereUniqueInput[]
  }

  export type IntimacaoUncheckedCreateNestedManyWithoutProcessoInput = {
    create?: XOR<IntimacaoCreateWithoutProcessoInput, IntimacaoUncheckedCreateWithoutProcessoInput> | IntimacaoCreateWithoutProcessoInput[] | IntimacaoUncheckedCreateWithoutProcessoInput[]
    connectOrCreate?: IntimacaoCreateOrConnectWithoutProcessoInput | IntimacaoCreateOrConnectWithoutProcessoInput[]
    createMany?: IntimacaoCreateManyProcessoInputEnvelope
    connect?: IntimacaoWhereUniqueInput | IntimacaoWhereUniqueInput[]
  }

  export type AdvogadoUncheckedCreateNestedManyWithoutProcessosInput = {
    create?: XOR<AdvogadoCreateWithoutProcessosInput, AdvogadoUncheckedCreateWithoutProcessosInput> | AdvogadoCreateWithoutProcessosInput[] | AdvogadoUncheckedCreateWithoutProcessosInput[]
    connectOrCreate?: AdvogadoCreateOrConnectWithoutProcessosInput | AdvogadoCreateOrConnectWithoutProcessosInput[]
    connect?: AdvogadoWhereUniqueInput | AdvogadoWhereUniqueInput[]
  }

  export type IntimacaoUpdateManyWithoutProcessoNestedInput = {
    create?: XOR<IntimacaoCreateWithoutProcessoInput, IntimacaoUncheckedCreateWithoutProcessoInput> | IntimacaoCreateWithoutProcessoInput[] | IntimacaoUncheckedCreateWithoutProcessoInput[]
    connectOrCreate?: IntimacaoCreateOrConnectWithoutProcessoInput | IntimacaoCreateOrConnectWithoutProcessoInput[]
    upsert?: IntimacaoUpsertWithWhereUniqueWithoutProcessoInput | IntimacaoUpsertWithWhereUniqueWithoutProcessoInput[]
    createMany?: IntimacaoCreateManyProcessoInputEnvelope
    set?: IntimacaoWhereUniqueInput | IntimacaoWhereUniqueInput[]
    disconnect?: IntimacaoWhereUniqueInput | IntimacaoWhereUniqueInput[]
    delete?: IntimacaoWhereUniqueInput | IntimacaoWhereUniqueInput[]
    connect?: IntimacaoWhereUniqueInput | IntimacaoWhereUniqueInput[]
    update?: IntimacaoUpdateWithWhereUniqueWithoutProcessoInput | IntimacaoUpdateWithWhereUniqueWithoutProcessoInput[]
    updateMany?: IntimacaoUpdateManyWithWhereWithoutProcessoInput | IntimacaoUpdateManyWithWhereWithoutProcessoInput[]
    deleteMany?: IntimacaoScalarWhereInput | IntimacaoScalarWhereInput[]
  }

  export type AdvogadoUpdateManyWithoutProcessosNestedInput = {
    create?: XOR<AdvogadoCreateWithoutProcessosInput, AdvogadoUncheckedCreateWithoutProcessosInput> | AdvogadoCreateWithoutProcessosInput[] | AdvogadoUncheckedCreateWithoutProcessosInput[]
    connectOrCreate?: AdvogadoCreateOrConnectWithoutProcessosInput | AdvogadoCreateOrConnectWithoutProcessosInput[]
    upsert?: AdvogadoUpsertWithWhereUniqueWithoutProcessosInput | AdvogadoUpsertWithWhereUniqueWithoutProcessosInput[]
    set?: AdvogadoWhereUniqueInput | AdvogadoWhereUniqueInput[]
    disconnect?: AdvogadoWhereUniqueInput | AdvogadoWhereUniqueInput[]
    delete?: AdvogadoWhereUniqueInput | AdvogadoWhereUniqueInput[]
    connect?: AdvogadoWhereUniqueInput | AdvogadoWhereUniqueInput[]
    update?: AdvogadoUpdateWithWhereUniqueWithoutProcessosInput | AdvogadoUpdateWithWhereUniqueWithoutProcessosInput[]
    updateMany?: AdvogadoUpdateManyWithWhereWithoutProcessosInput | AdvogadoUpdateManyWithWhereWithoutProcessosInput[]
    deleteMany?: AdvogadoScalarWhereInput | AdvogadoScalarWhereInput[]
  }

  export type IntimacaoUncheckedUpdateManyWithoutProcessoNestedInput = {
    create?: XOR<IntimacaoCreateWithoutProcessoInput, IntimacaoUncheckedCreateWithoutProcessoInput> | IntimacaoCreateWithoutProcessoInput[] | IntimacaoUncheckedCreateWithoutProcessoInput[]
    connectOrCreate?: IntimacaoCreateOrConnectWithoutProcessoInput | IntimacaoCreateOrConnectWithoutProcessoInput[]
    upsert?: IntimacaoUpsertWithWhereUniqueWithoutProcessoInput | IntimacaoUpsertWithWhereUniqueWithoutProcessoInput[]
    createMany?: IntimacaoCreateManyProcessoInputEnvelope
    set?: IntimacaoWhereUniqueInput | IntimacaoWhereUniqueInput[]
    disconnect?: IntimacaoWhereUniqueInput | IntimacaoWhereUniqueInput[]
    delete?: IntimacaoWhereUniqueInput | IntimacaoWhereUniqueInput[]
    connect?: IntimacaoWhereUniqueInput | IntimacaoWhereUniqueInput[]
    update?: IntimacaoUpdateWithWhereUniqueWithoutProcessoInput | IntimacaoUpdateWithWhereUniqueWithoutProcessoInput[]
    updateMany?: IntimacaoUpdateManyWithWhereWithoutProcessoInput | IntimacaoUpdateManyWithWhereWithoutProcessoInput[]
    deleteMany?: IntimacaoScalarWhereInput | IntimacaoScalarWhereInput[]
  }

  export type AdvogadoUncheckedUpdateManyWithoutProcessosNestedInput = {
    create?: XOR<AdvogadoCreateWithoutProcessosInput, AdvogadoUncheckedCreateWithoutProcessosInput> | AdvogadoCreateWithoutProcessosInput[] | AdvogadoUncheckedCreateWithoutProcessosInput[]
    connectOrCreate?: AdvogadoCreateOrConnectWithoutProcessosInput | AdvogadoCreateOrConnectWithoutProcessosInput[]
    upsert?: AdvogadoUpsertWithWhereUniqueWithoutProcessosInput | AdvogadoUpsertWithWhereUniqueWithoutProcessosInput[]
    set?: AdvogadoWhereUniqueInput | AdvogadoWhereUniqueInput[]
    disconnect?: AdvogadoWhereUniqueInput | AdvogadoWhereUniqueInput[]
    delete?: AdvogadoWhereUniqueInput | AdvogadoWhereUniqueInput[]
    connect?: AdvogadoWhereUniqueInput | AdvogadoWhereUniqueInput[]
    update?: AdvogadoUpdateWithWhereUniqueWithoutProcessosInput | AdvogadoUpdateWithWhereUniqueWithoutProcessosInput[]
    updateMany?: AdvogadoUpdateManyWithWhereWithoutProcessosInput | AdvogadoUpdateManyWithWhereWithoutProcessosInput[]
    deleteMany?: AdvogadoScalarWhereInput | AdvogadoScalarWhereInput[]
  }

  export type ProcessoCreateNestedOneWithoutIntimacoesInput = {
    create?: XOR<ProcessoCreateWithoutIntimacoesInput, ProcessoUncheckedCreateWithoutIntimacoesInput>
    connectOrCreate?: ProcessoCreateOrConnectWithoutIntimacoesInput
    connect?: ProcessoWhereUniqueInput
  }

  export type AdvogadoCreateNestedOneWithoutIntimacoesInput = {
    create?: XOR<AdvogadoCreateWithoutIntimacoesInput, AdvogadoUncheckedCreateWithoutIntimacoesInput>
    connectOrCreate?: AdvogadoCreateOrConnectWithoutIntimacoesInput
    connect?: AdvogadoWhereUniqueInput
  }

  export type NotificacaoCreateNestedManyWithoutIntimacaoInput = {
    create?: XOR<NotificacaoCreateWithoutIntimacaoInput, NotificacaoUncheckedCreateWithoutIntimacaoInput> | NotificacaoCreateWithoutIntimacaoInput[] | NotificacaoUncheckedCreateWithoutIntimacaoInput[]
    connectOrCreate?: NotificacaoCreateOrConnectWithoutIntimacaoInput | NotificacaoCreateOrConnectWithoutIntimacaoInput[]
    createMany?: NotificacaoCreateManyIntimacaoInputEnvelope
    connect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
  }

  export type NotificacaoUncheckedCreateNestedManyWithoutIntimacaoInput = {
    create?: XOR<NotificacaoCreateWithoutIntimacaoInput, NotificacaoUncheckedCreateWithoutIntimacaoInput> | NotificacaoCreateWithoutIntimacaoInput[] | NotificacaoUncheckedCreateWithoutIntimacaoInput[]
    connectOrCreate?: NotificacaoCreateOrConnectWithoutIntimacaoInput | NotificacaoCreateOrConnectWithoutIntimacaoInput[]
    createMany?: NotificacaoCreateManyIntimacaoInputEnvelope
    connect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProcessoUpdateOneRequiredWithoutIntimacoesNestedInput = {
    create?: XOR<ProcessoCreateWithoutIntimacoesInput, ProcessoUncheckedCreateWithoutIntimacoesInput>
    connectOrCreate?: ProcessoCreateOrConnectWithoutIntimacoesInput
    upsert?: ProcessoUpsertWithoutIntimacoesInput
    connect?: ProcessoWhereUniqueInput
    update?: XOR<XOR<ProcessoUpdateToOneWithWhereWithoutIntimacoesInput, ProcessoUpdateWithoutIntimacoesInput>, ProcessoUncheckedUpdateWithoutIntimacoesInput>
  }

  export type AdvogadoUpdateOneRequiredWithoutIntimacoesNestedInput = {
    create?: XOR<AdvogadoCreateWithoutIntimacoesInput, AdvogadoUncheckedCreateWithoutIntimacoesInput>
    connectOrCreate?: AdvogadoCreateOrConnectWithoutIntimacoesInput
    upsert?: AdvogadoUpsertWithoutIntimacoesInput
    connect?: AdvogadoWhereUniqueInput
    update?: XOR<XOR<AdvogadoUpdateToOneWithWhereWithoutIntimacoesInput, AdvogadoUpdateWithoutIntimacoesInput>, AdvogadoUncheckedUpdateWithoutIntimacoesInput>
  }

  export type NotificacaoUpdateManyWithoutIntimacaoNestedInput = {
    create?: XOR<NotificacaoCreateWithoutIntimacaoInput, NotificacaoUncheckedCreateWithoutIntimacaoInput> | NotificacaoCreateWithoutIntimacaoInput[] | NotificacaoUncheckedCreateWithoutIntimacaoInput[]
    connectOrCreate?: NotificacaoCreateOrConnectWithoutIntimacaoInput | NotificacaoCreateOrConnectWithoutIntimacaoInput[]
    upsert?: NotificacaoUpsertWithWhereUniqueWithoutIntimacaoInput | NotificacaoUpsertWithWhereUniqueWithoutIntimacaoInput[]
    createMany?: NotificacaoCreateManyIntimacaoInputEnvelope
    set?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    disconnect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    delete?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    connect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    update?: NotificacaoUpdateWithWhereUniqueWithoutIntimacaoInput | NotificacaoUpdateWithWhereUniqueWithoutIntimacaoInput[]
    updateMany?: NotificacaoUpdateManyWithWhereWithoutIntimacaoInput | NotificacaoUpdateManyWithWhereWithoutIntimacaoInput[]
    deleteMany?: NotificacaoScalarWhereInput | NotificacaoScalarWhereInput[]
  }

  export type NotificacaoUncheckedUpdateManyWithoutIntimacaoNestedInput = {
    create?: XOR<NotificacaoCreateWithoutIntimacaoInput, NotificacaoUncheckedCreateWithoutIntimacaoInput> | NotificacaoCreateWithoutIntimacaoInput[] | NotificacaoUncheckedCreateWithoutIntimacaoInput[]
    connectOrCreate?: NotificacaoCreateOrConnectWithoutIntimacaoInput | NotificacaoCreateOrConnectWithoutIntimacaoInput[]
    upsert?: NotificacaoUpsertWithWhereUniqueWithoutIntimacaoInput | NotificacaoUpsertWithWhereUniqueWithoutIntimacaoInput[]
    createMany?: NotificacaoCreateManyIntimacaoInputEnvelope
    set?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    disconnect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    delete?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    connect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    update?: NotificacaoUpdateWithWhereUniqueWithoutIntimacaoInput | NotificacaoUpdateWithWhereUniqueWithoutIntimacaoInput[]
    updateMany?: NotificacaoUpdateManyWithWhereWithoutIntimacaoInput | NotificacaoUpdateManyWithWhereWithoutIntimacaoInput[]
    deleteMany?: NotificacaoScalarWhereInput | NotificacaoScalarWhereInput[]
  }

  export type IntimacaoCreateNestedOneWithoutNotificacaoInput = {
    create?: XOR<IntimacaoCreateWithoutNotificacaoInput, IntimacaoUncheckedCreateWithoutNotificacaoInput>
    connectOrCreate?: IntimacaoCreateOrConnectWithoutNotificacaoInput
    connect?: IntimacaoWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntimacaoUpdateOneRequiredWithoutNotificacaoNestedInput = {
    create?: XOR<IntimacaoCreateWithoutNotificacaoInput, IntimacaoUncheckedCreateWithoutNotificacaoInput>
    connectOrCreate?: IntimacaoCreateOrConnectWithoutNotificacaoInput
    upsert?: IntimacaoUpsertWithoutNotificacaoInput
    connect?: IntimacaoWhereUniqueInput
    update?: XOR<XOR<IntimacaoUpdateToOneWithWhereWithoutNotificacaoInput, IntimacaoUpdateWithoutNotificacaoInput>, IntimacaoUncheckedUpdateWithoutNotificacaoInput>
  }

  export type AdvogadoCreateNestedOneWithoutGoogleAuthInput = {
    create?: XOR<AdvogadoCreateWithoutGoogleAuthInput, AdvogadoUncheckedCreateWithoutGoogleAuthInput>
    connectOrCreate?: AdvogadoCreateOrConnectWithoutGoogleAuthInput
    connect?: AdvogadoWhereUniqueInput
  }

  export type AdvogadoUpdateOneRequiredWithoutGoogleAuthNestedInput = {
    create?: XOR<AdvogadoCreateWithoutGoogleAuthInput, AdvogadoUncheckedCreateWithoutGoogleAuthInput>
    connectOrCreate?: AdvogadoCreateOrConnectWithoutGoogleAuthInput
    upsert?: AdvogadoUpsertWithoutGoogleAuthInput
    connect?: AdvogadoWhereUniqueInput
    update?: XOR<XOR<AdvogadoUpdateToOneWithWhereWithoutGoogleAuthInput, AdvogadoUpdateWithoutGoogleAuthInput>, AdvogadoUncheckedUpdateWithoutGoogleAuthInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type GoogleAuthCreateWithoutAdvogadoInput = {
    id?: string
    accessToken: string
    refreshToken: string
    expiresAt: Date | string
    scope: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoogleAuthUncheckedCreateWithoutAdvogadoInput = {
    id?: string
    accessToken: string
    refreshToken: string
    expiresAt: Date | string
    scope: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoogleAuthCreateOrConnectWithoutAdvogadoInput = {
    where: GoogleAuthWhereUniqueInput
    create: XOR<GoogleAuthCreateWithoutAdvogadoInput, GoogleAuthUncheckedCreateWithoutAdvogadoInput>
  }

  export type IntimacaoCreateWithoutAdvogadoInput = {
    id?: string
    dataPublicacao: Date | string
    prazo: number
    dataLimite: Date | string
    conteudo: string
    resumoIA?: string | null
    status: string
    googleEventId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    processo: ProcessoCreateNestedOneWithoutIntimacoesInput
    Notificacao?: NotificacaoCreateNestedManyWithoutIntimacaoInput
  }

  export type IntimacaoUncheckedCreateWithoutAdvogadoInput = {
    id?: string
    processoId: string
    dataPublicacao: Date | string
    prazo: number
    dataLimite: Date | string
    conteudo: string
    resumoIA?: string | null
    status: string
    googleEventId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Notificacao?: NotificacaoUncheckedCreateNestedManyWithoutIntimacaoInput
  }

  export type IntimacaoCreateOrConnectWithoutAdvogadoInput = {
    where: IntimacaoWhereUniqueInput
    create: XOR<IntimacaoCreateWithoutAdvogadoInput, IntimacaoUncheckedCreateWithoutAdvogadoInput>
  }

  export type IntimacaoCreateManyAdvogadoInputEnvelope = {
    data: IntimacaoCreateManyAdvogadoInput | IntimacaoCreateManyAdvogadoInput[]
    skipDuplicates?: boolean
  }

  export type ProcessoCreateWithoutAdvogadosInput = {
    id?: string
    numeroProcesso: string
    vara: string
    tribunal: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    intimacoes?: IntimacaoCreateNestedManyWithoutProcessoInput
  }

  export type ProcessoUncheckedCreateWithoutAdvogadosInput = {
    id?: string
    numeroProcesso: string
    vara: string
    tribunal: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    intimacoes?: IntimacaoUncheckedCreateNestedManyWithoutProcessoInput
  }

  export type ProcessoCreateOrConnectWithoutAdvogadosInput = {
    where: ProcessoWhereUniqueInput
    create: XOR<ProcessoCreateWithoutAdvogadosInput, ProcessoUncheckedCreateWithoutAdvogadosInput>
  }

  export type GoogleAuthUpsertWithoutAdvogadoInput = {
    update: XOR<GoogleAuthUpdateWithoutAdvogadoInput, GoogleAuthUncheckedUpdateWithoutAdvogadoInput>
    create: XOR<GoogleAuthCreateWithoutAdvogadoInput, GoogleAuthUncheckedCreateWithoutAdvogadoInput>
    where?: GoogleAuthWhereInput
  }

  export type GoogleAuthUpdateToOneWithWhereWithoutAdvogadoInput = {
    where?: GoogleAuthWhereInput
    data: XOR<GoogleAuthUpdateWithoutAdvogadoInput, GoogleAuthUncheckedUpdateWithoutAdvogadoInput>
  }

  export type GoogleAuthUpdateWithoutAdvogadoInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoogleAuthUncheckedUpdateWithoutAdvogadoInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntimacaoUpsertWithWhereUniqueWithoutAdvogadoInput = {
    where: IntimacaoWhereUniqueInput
    update: XOR<IntimacaoUpdateWithoutAdvogadoInput, IntimacaoUncheckedUpdateWithoutAdvogadoInput>
    create: XOR<IntimacaoCreateWithoutAdvogadoInput, IntimacaoUncheckedCreateWithoutAdvogadoInput>
  }

  export type IntimacaoUpdateWithWhereUniqueWithoutAdvogadoInput = {
    where: IntimacaoWhereUniqueInput
    data: XOR<IntimacaoUpdateWithoutAdvogadoInput, IntimacaoUncheckedUpdateWithoutAdvogadoInput>
  }

  export type IntimacaoUpdateManyWithWhereWithoutAdvogadoInput = {
    where: IntimacaoScalarWhereInput
    data: XOR<IntimacaoUpdateManyMutationInput, IntimacaoUncheckedUpdateManyWithoutAdvogadoInput>
  }

  export type IntimacaoScalarWhereInput = {
    AND?: IntimacaoScalarWhereInput | IntimacaoScalarWhereInput[]
    OR?: IntimacaoScalarWhereInput[]
    NOT?: IntimacaoScalarWhereInput | IntimacaoScalarWhereInput[]
    id?: StringFilter<"Intimacao"> | string
    processoId?: StringFilter<"Intimacao"> | string
    advogadoId?: StringFilter<"Intimacao"> | string
    dataPublicacao?: DateTimeFilter<"Intimacao"> | Date | string
    prazo?: IntFilter<"Intimacao"> | number
    dataLimite?: DateTimeFilter<"Intimacao"> | Date | string
    conteudo?: StringFilter<"Intimacao"> | string
    resumoIA?: StringNullableFilter<"Intimacao"> | string | null
    status?: StringFilter<"Intimacao"> | string
    googleEventId?: StringNullableFilter<"Intimacao"> | string | null
    createdAt?: DateTimeFilter<"Intimacao"> | Date | string
    updatedAt?: DateTimeFilter<"Intimacao"> | Date | string
  }

  export type ProcessoUpsertWithWhereUniqueWithoutAdvogadosInput = {
    where: ProcessoWhereUniqueInput
    update: XOR<ProcessoUpdateWithoutAdvogadosInput, ProcessoUncheckedUpdateWithoutAdvogadosInput>
    create: XOR<ProcessoCreateWithoutAdvogadosInput, ProcessoUncheckedCreateWithoutAdvogadosInput>
  }

  export type ProcessoUpdateWithWhereUniqueWithoutAdvogadosInput = {
    where: ProcessoWhereUniqueInput
    data: XOR<ProcessoUpdateWithoutAdvogadosInput, ProcessoUncheckedUpdateWithoutAdvogadosInput>
  }

  export type ProcessoUpdateManyWithWhereWithoutAdvogadosInput = {
    where: ProcessoScalarWhereInput
    data: XOR<ProcessoUpdateManyMutationInput, ProcessoUncheckedUpdateManyWithoutAdvogadosInput>
  }

  export type ProcessoScalarWhereInput = {
    AND?: ProcessoScalarWhereInput | ProcessoScalarWhereInput[]
    OR?: ProcessoScalarWhereInput[]
    NOT?: ProcessoScalarWhereInput | ProcessoScalarWhereInput[]
    id?: StringFilter<"Processo"> | string
    numeroProcesso?: StringFilter<"Processo"> | string
    vara?: StringFilter<"Processo"> | string
    tribunal?: StringFilter<"Processo"> | string
    status?: StringFilter<"Processo"> | string
    createdAt?: DateTimeFilter<"Processo"> | Date | string
    updatedAt?: DateTimeFilter<"Processo"> | Date | string
  }

  export type IntimacaoCreateWithoutProcessoInput = {
    id?: string
    dataPublicacao: Date | string
    prazo: number
    dataLimite: Date | string
    conteudo: string
    resumoIA?: string | null
    status: string
    googleEventId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    advogado: AdvogadoCreateNestedOneWithoutIntimacoesInput
    Notificacao?: NotificacaoCreateNestedManyWithoutIntimacaoInput
  }

  export type IntimacaoUncheckedCreateWithoutProcessoInput = {
    id?: string
    advogadoId: string
    dataPublicacao: Date | string
    prazo: number
    dataLimite: Date | string
    conteudo: string
    resumoIA?: string | null
    status: string
    googleEventId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Notificacao?: NotificacaoUncheckedCreateNestedManyWithoutIntimacaoInput
  }

  export type IntimacaoCreateOrConnectWithoutProcessoInput = {
    where: IntimacaoWhereUniqueInput
    create: XOR<IntimacaoCreateWithoutProcessoInput, IntimacaoUncheckedCreateWithoutProcessoInput>
  }

  export type IntimacaoCreateManyProcessoInputEnvelope = {
    data: IntimacaoCreateManyProcessoInput | IntimacaoCreateManyProcessoInput[]
    skipDuplicates?: boolean
  }

  export type AdvogadoCreateWithoutProcessosInput = {
    id?: string
    nome: string
    oab: string
    telefone: string
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    googleCalendarId?: string | null
    googleAuth?: GoogleAuthCreateNestedOneWithoutAdvogadoInput
    intimacoes?: IntimacaoCreateNestedManyWithoutAdvogadoInput
  }

  export type AdvogadoUncheckedCreateWithoutProcessosInput = {
    id?: string
    nome: string
    oab: string
    telefone: string
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    googleCalendarId?: string | null
    googleAuth?: GoogleAuthUncheckedCreateNestedOneWithoutAdvogadoInput
    intimacoes?: IntimacaoUncheckedCreateNestedManyWithoutAdvogadoInput
  }

  export type AdvogadoCreateOrConnectWithoutProcessosInput = {
    where: AdvogadoWhereUniqueInput
    create: XOR<AdvogadoCreateWithoutProcessosInput, AdvogadoUncheckedCreateWithoutProcessosInput>
  }

  export type IntimacaoUpsertWithWhereUniqueWithoutProcessoInput = {
    where: IntimacaoWhereUniqueInput
    update: XOR<IntimacaoUpdateWithoutProcessoInput, IntimacaoUncheckedUpdateWithoutProcessoInput>
    create: XOR<IntimacaoCreateWithoutProcessoInput, IntimacaoUncheckedCreateWithoutProcessoInput>
  }

  export type IntimacaoUpdateWithWhereUniqueWithoutProcessoInput = {
    where: IntimacaoWhereUniqueInput
    data: XOR<IntimacaoUpdateWithoutProcessoInput, IntimacaoUncheckedUpdateWithoutProcessoInput>
  }

  export type IntimacaoUpdateManyWithWhereWithoutProcessoInput = {
    where: IntimacaoScalarWhereInput
    data: XOR<IntimacaoUpdateManyMutationInput, IntimacaoUncheckedUpdateManyWithoutProcessoInput>
  }

  export type AdvogadoUpsertWithWhereUniqueWithoutProcessosInput = {
    where: AdvogadoWhereUniqueInput
    update: XOR<AdvogadoUpdateWithoutProcessosInput, AdvogadoUncheckedUpdateWithoutProcessosInput>
    create: XOR<AdvogadoCreateWithoutProcessosInput, AdvogadoUncheckedCreateWithoutProcessosInput>
  }

  export type AdvogadoUpdateWithWhereUniqueWithoutProcessosInput = {
    where: AdvogadoWhereUniqueInput
    data: XOR<AdvogadoUpdateWithoutProcessosInput, AdvogadoUncheckedUpdateWithoutProcessosInput>
  }

  export type AdvogadoUpdateManyWithWhereWithoutProcessosInput = {
    where: AdvogadoScalarWhereInput
    data: XOR<AdvogadoUpdateManyMutationInput, AdvogadoUncheckedUpdateManyWithoutProcessosInput>
  }

  export type AdvogadoScalarWhereInput = {
    AND?: AdvogadoScalarWhereInput | AdvogadoScalarWhereInput[]
    OR?: AdvogadoScalarWhereInput[]
    NOT?: AdvogadoScalarWhereInput | AdvogadoScalarWhereInput[]
    id?: StringFilter<"Advogado"> | string
    nome?: StringFilter<"Advogado"> | string
    oab?: StringFilter<"Advogado"> | string
    telefone?: StringFilter<"Advogado"> | string
    ativo?: BoolFilter<"Advogado"> | boolean
    createdAt?: DateTimeFilter<"Advogado"> | Date | string
    updatedAt?: DateTimeFilter<"Advogado"> | Date | string
    email?: StringFilter<"Advogado"> | string
    googleCalendarId?: StringNullableFilter<"Advogado"> | string | null
  }

  export type ProcessoCreateWithoutIntimacoesInput = {
    id?: string
    numeroProcesso: string
    vara: string
    tribunal: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    advogados?: AdvogadoCreateNestedManyWithoutProcessosInput
  }

  export type ProcessoUncheckedCreateWithoutIntimacoesInput = {
    id?: string
    numeroProcesso: string
    vara: string
    tribunal: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    advogados?: AdvogadoUncheckedCreateNestedManyWithoutProcessosInput
  }

  export type ProcessoCreateOrConnectWithoutIntimacoesInput = {
    where: ProcessoWhereUniqueInput
    create: XOR<ProcessoCreateWithoutIntimacoesInput, ProcessoUncheckedCreateWithoutIntimacoesInput>
  }

  export type AdvogadoCreateWithoutIntimacoesInput = {
    id?: string
    nome: string
    oab: string
    telefone: string
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    googleCalendarId?: string | null
    googleAuth?: GoogleAuthCreateNestedOneWithoutAdvogadoInput
    processos?: ProcessoCreateNestedManyWithoutAdvogadosInput
  }

  export type AdvogadoUncheckedCreateWithoutIntimacoesInput = {
    id?: string
    nome: string
    oab: string
    telefone: string
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    googleCalendarId?: string | null
    googleAuth?: GoogleAuthUncheckedCreateNestedOneWithoutAdvogadoInput
    processos?: ProcessoUncheckedCreateNestedManyWithoutAdvogadosInput
  }

  export type AdvogadoCreateOrConnectWithoutIntimacoesInput = {
    where: AdvogadoWhereUniqueInput
    create: XOR<AdvogadoCreateWithoutIntimacoesInput, AdvogadoUncheckedCreateWithoutIntimacoesInput>
  }

  export type NotificacaoCreateWithoutIntimacaoInput = {
    id?: string
    tipo: string
    status: string
    dataEnvio?: Date | string | null
    tentativas?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificacaoUncheckedCreateWithoutIntimacaoInput = {
    id?: string
    tipo: string
    status: string
    dataEnvio?: Date | string | null
    tentativas?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificacaoCreateOrConnectWithoutIntimacaoInput = {
    where: NotificacaoWhereUniqueInput
    create: XOR<NotificacaoCreateWithoutIntimacaoInput, NotificacaoUncheckedCreateWithoutIntimacaoInput>
  }

  export type NotificacaoCreateManyIntimacaoInputEnvelope = {
    data: NotificacaoCreateManyIntimacaoInput | NotificacaoCreateManyIntimacaoInput[]
    skipDuplicates?: boolean
  }

  export type ProcessoUpsertWithoutIntimacoesInput = {
    update: XOR<ProcessoUpdateWithoutIntimacoesInput, ProcessoUncheckedUpdateWithoutIntimacoesInput>
    create: XOR<ProcessoCreateWithoutIntimacoesInput, ProcessoUncheckedCreateWithoutIntimacoesInput>
    where?: ProcessoWhereInput
  }

  export type ProcessoUpdateToOneWithWhereWithoutIntimacoesInput = {
    where?: ProcessoWhereInput
    data: XOR<ProcessoUpdateWithoutIntimacoesInput, ProcessoUncheckedUpdateWithoutIntimacoesInput>
  }

  export type ProcessoUpdateWithoutIntimacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    numeroProcesso?: StringFieldUpdateOperationsInput | string
    vara?: StringFieldUpdateOperationsInput | string
    tribunal?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    advogados?: AdvogadoUpdateManyWithoutProcessosNestedInput
  }

  export type ProcessoUncheckedUpdateWithoutIntimacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    numeroProcesso?: StringFieldUpdateOperationsInput | string
    vara?: StringFieldUpdateOperationsInput | string
    tribunal?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    advogados?: AdvogadoUncheckedUpdateManyWithoutProcessosNestedInput
  }

  export type AdvogadoUpsertWithoutIntimacoesInput = {
    update: XOR<AdvogadoUpdateWithoutIntimacoesInput, AdvogadoUncheckedUpdateWithoutIntimacoesInput>
    create: XOR<AdvogadoCreateWithoutIntimacoesInput, AdvogadoUncheckedCreateWithoutIntimacoesInput>
    where?: AdvogadoWhereInput
  }

  export type AdvogadoUpdateToOneWithWhereWithoutIntimacoesInput = {
    where?: AdvogadoWhereInput
    data: XOR<AdvogadoUpdateWithoutIntimacoesInput, AdvogadoUncheckedUpdateWithoutIntimacoesInput>
  }

  export type AdvogadoUpdateWithoutIntimacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    oab?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    googleCalendarId?: NullableStringFieldUpdateOperationsInput | string | null
    googleAuth?: GoogleAuthUpdateOneWithoutAdvogadoNestedInput
    processos?: ProcessoUpdateManyWithoutAdvogadosNestedInput
  }

  export type AdvogadoUncheckedUpdateWithoutIntimacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    oab?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    googleCalendarId?: NullableStringFieldUpdateOperationsInput | string | null
    googleAuth?: GoogleAuthUncheckedUpdateOneWithoutAdvogadoNestedInput
    processos?: ProcessoUncheckedUpdateManyWithoutAdvogadosNestedInput
  }

  export type NotificacaoUpsertWithWhereUniqueWithoutIntimacaoInput = {
    where: NotificacaoWhereUniqueInput
    update: XOR<NotificacaoUpdateWithoutIntimacaoInput, NotificacaoUncheckedUpdateWithoutIntimacaoInput>
    create: XOR<NotificacaoCreateWithoutIntimacaoInput, NotificacaoUncheckedCreateWithoutIntimacaoInput>
  }

  export type NotificacaoUpdateWithWhereUniqueWithoutIntimacaoInput = {
    where: NotificacaoWhereUniqueInput
    data: XOR<NotificacaoUpdateWithoutIntimacaoInput, NotificacaoUncheckedUpdateWithoutIntimacaoInput>
  }

  export type NotificacaoUpdateManyWithWhereWithoutIntimacaoInput = {
    where: NotificacaoScalarWhereInput
    data: XOR<NotificacaoUpdateManyMutationInput, NotificacaoUncheckedUpdateManyWithoutIntimacaoInput>
  }

  export type NotificacaoScalarWhereInput = {
    AND?: NotificacaoScalarWhereInput | NotificacaoScalarWhereInput[]
    OR?: NotificacaoScalarWhereInput[]
    NOT?: NotificacaoScalarWhereInput | NotificacaoScalarWhereInput[]
    id?: StringFilter<"Notificacao"> | string
    intimacaoId?: StringFilter<"Notificacao"> | string
    tipo?: StringFilter<"Notificacao"> | string
    status?: StringFilter<"Notificacao"> | string
    dataEnvio?: DateTimeNullableFilter<"Notificacao"> | Date | string | null
    tentativas?: IntFilter<"Notificacao"> | number
    createdAt?: DateTimeFilter<"Notificacao"> | Date | string
    updatedAt?: DateTimeFilter<"Notificacao"> | Date | string
  }

  export type IntimacaoCreateWithoutNotificacaoInput = {
    id?: string
    dataPublicacao: Date | string
    prazo: number
    dataLimite: Date | string
    conteudo: string
    resumoIA?: string | null
    status: string
    googleEventId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    processo: ProcessoCreateNestedOneWithoutIntimacoesInput
    advogado: AdvogadoCreateNestedOneWithoutIntimacoesInput
  }

  export type IntimacaoUncheckedCreateWithoutNotificacaoInput = {
    id?: string
    processoId: string
    advogadoId: string
    dataPublicacao: Date | string
    prazo: number
    dataLimite: Date | string
    conteudo: string
    resumoIA?: string | null
    status: string
    googleEventId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IntimacaoCreateOrConnectWithoutNotificacaoInput = {
    where: IntimacaoWhereUniqueInput
    create: XOR<IntimacaoCreateWithoutNotificacaoInput, IntimacaoUncheckedCreateWithoutNotificacaoInput>
  }

  export type IntimacaoUpsertWithoutNotificacaoInput = {
    update: XOR<IntimacaoUpdateWithoutNotificacaoInput, IntimacaoUncheckedUpdateWithoutNotificacaoInput>
    create: XOR<IntimacaoCreateWithoutNotificacaoInput, IntimacaoUncheckedCreateWithoutNotificacaoInput>
    where?: IntimacaoWhereInput
  }

  export type IntimacaoUpdateToOneWithWhereWithoutNotificacaoInput = {
    where?: IntimacaoWhereInput
    data: XOR<IntimacaoUpdateWithoutNotificacaoInput, IntimacaoUncheckedUpdateWithoutNotificacaoInput>
  }

  export type IntimacaoUpdateWithoutNotificacaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    prazo?: IntFieldUpdateOperationsInput | number
    dataLimite?: DateTimeFieldUpdateOperationsInput | Date | string
    conteudo?: StringFieldUpdateOperationsInput | string
    resumoIA?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    googleEventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processo?: ProcessoUpdateOneRequiredWithoutIntimacoesNestedInput
    advogado?: AdvogadoUpdateOneRequiredWithoutIntimacoesNestedInput
  }

  export type IntimacaoUncheckedUpdateWithoutNotificacaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    processoId?: StringFieldUpdateOperationsInput | string
    advogadoId?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    prazo?: IntFieldUpdateOperationsInput | number
    dataLimite?: DateTimeFieldUpdateOperationsInput | Date | string
    conteudo?: StringFieldUpdateOperationsInput | string
    resumoIA?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    googleEventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdvogadoCreateWithoutGoogleAuthInput = {
    id?: string
    nome: string
    oab: string
    telefone: string
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    googleCalendarId?: string | null
    intimacoes?: IntimacaoCreateNestedManyWithoutAdvogadoInput
    processos?: ProcessoCreateNestedManyWithoutAdvogadosInput
  }

  export type AdvogadoUncheckedCreateWithoutGoogleAuthInput = {
    id?: string
    nome: string
    oab: string
    telefone: string
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    googleCalendarId?: string | null
    intimacoes?: IntimacaoUncheckedCreateNestedManyWithoutAdvogadoInput
    processos?: ProcessoUncheckedCreateNestedManyWithoutAdvogadosInput
  }

  export type AdvogadoCreateOrConnectWithoutGoogleAuthInput = {
    where: AdvogadoWhereUniqueInput
    create: XOR<AdvogadoCreateWithoutGoogleAuthInput, AdvogadoUncheckedCreateWithoutGoogleAuthInput>
  }

  export type AdvogadoUpsertWithoutGoogleAuthInput = {
    update: XOR<AdvogadoUpdateWithoutGoogleAuthInput, AdvogadoUncheckedUpdateWithoutGoogleAuthInput>
    create: XOR<AdvogadoCreateWithoutGoogleAuthInput, AdvogadoUncheckedCreateWithoutGoogleAuthInput>
    where?: AdvogadoWhereInput
  }

  export type AdvogadoUpdateToOneWithWhereWithoutGoogleAuthInput = {
    where?: AdvogadoWhereInput
    data: XOR<AdvogadoUpdateWithoutGoogleAuthInput, AdvogadoUncheckedUpdateWithoutGoogleAuthInput>
  }

  export type AdvogadoUpdateWithoutGoogleAuthInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    oab?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    googleCalendarId?: NullableStringFieldUpdateOperationsInput | string | null
    intimacoes?: IntimacaoUpdateManyWithoutAdvogadoNestedInput
    processos?: ProcessoUpdateManyWithoutAdvogadosNestedInput
  }

  export type AdvogadoUncheckedUpdateWithoutGoogleAuthInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    oab?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    googleCalendarId?: NullableStringFieldUpdateOperationsInput | string | null
    intimacoes?: IntimacaoUncheckedUpdateManyWithoutAdvogadoNestedInput
    processos?: ProcessoUncheckedUpdateManyWithoutAdvogadosNestedInput
  }

  export type IntimacaoCreateManyAdvogadoInput = {
    id?: string
    processoId: string
    dataPublicacao: Date | string
    prazo: number
    dataLimite: Date | string
    conteudo: string
    resumoIA?: string | null
    status: string
    googleEventId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IntimacaoUpdateWithoutAdvogadoInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    prazo?: IntFieldUpdateOperationsInput | number
    dataLimite?: DateTimeFieldUpdateOperationsInput | Date | string
    conteudo?: StringFieldUpdateOperationsInput | string
    resumoIA?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    googleEventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processo?: ProcessoUpdateOneRequiredWithoutIntimacoesNestedInput
    Notificacao?: NotificacaoUpdateManyWithoutIntimacaoNestedInput
  }

  export type IntimacaoUncheckedUpdateWithoutAdvogadoInput = {
    id?: StringFieldUpdateOperationsInput | string
    processoId?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    prazo?: IntFieldUpdateOperationsInput | number
    dataLimite?: DateTimeFieldUpdateOperationsInput | Date | string
    conteudo?: StringFieldUpdateOperationsInput | string
    resumoIA?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    googleEventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Notificacao?: NotificacaoUncheckedUpdateManyWithoutIntimacaoNestedInput
  }

  export type IntimacaoUncheckedUpdateManyWithoutAdvogadoInput = {
    id?: StringFieldUpdateOperationsInput | string
    processoId?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    prazo?: IntFieldUpdateOperationsInput | number
    dataLimite?: DateTimeFieldUpdateOperationsInput | Date | string
    conteudo?: StringFieldUpdateOperationsInput | string
    resumoIA?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    googleEventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcessoUpdateWithoutAdvogadosInput = {
    id?: StringFieldUpdateOperationsInput | string
    numeroProcesso?: StringFieldUpdateOperationsInput | string
    vara?: StringFieldUpdateOperationsInput | string
    tribunal?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    intimacoes?: IntimacaoUpdateManyWithoutProcessoNestedInput
  }

  export type ProcessoUncheckedUpdateWithoutAdvogadosInput = {
    id?: StringFieldUpdateOperationsInput | string
    numeroProcesso?: StringFieldUpdateOperationsInput | string
    vara?: StringFieldUpdateOperationsInput | string
    tribunal?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    intimacoes?: IntimacaoUncheckedUpdateManyWithoutProcessoNestedInput
  }

  export type ProcessoUncheckedUpdateManyWithoutAdvogadosInput = {
    id?: StringFieldUpdateOperationsInput | string
    numeroProcesso?: StringFieldUpdateOperationsInput | string
    vara?: StringFieldUpdateOperationsInput | string
    tribunal?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntimacaoCreateManyProcessoInput = {
    id?: string
    advogadoId: string
    dataPublicacao: Date | string
    prazo: number
    dataLimite: Date | string
    conteudo: string
    resumoIA?: string | null
    status: string
    googleEventId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IntimacaoUpdateWithoutProcessoInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    prazo?: IntFieldUpdateOperationsInput | number
    dataLimite?: DateTimeFieldUpdateOperationsInput | Date | string
    conteudo?: StringFieldUpdateOperationsInput | string
    resumoIA?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    googleEventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    advogado?: AdvogadoUpdateOneRequiredWithoutIntimacoesNestedInput
    Notificacao?: NotificacaoUpdateManyWithoutIntimacaoNestedInput
  }

  export type IntimacaoUncheckedUpdateWithoutProcessoInput = {
    id?: StringFieldUpdateOperationsInput | string
    advogadoId?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    prazo?: IntFieldUpdateOperationsInput | number
    dataLimite?: DateTimeFieldUpdateOperationsInput | Date | string
    conteudo?: StringFieldUpdateOperationsInput | string
    resumoIA?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    googleEventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Notificacao?: NotificacaoUncheckedUpdateManyWithoutIntimacaoNestedInput
  }

  export type IntimacaoUncheckedUpdateManyWithoutProcessoInput = {
    id?: StringFieldUpdateOperationsInput | string
    advogadoId?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    prazo?: IntFieldUpdateOperationsInput | number
    dataLimite?: DateTimeFieldUpdateOperationsInput | Date | string
    conteudo?: StringFieldUpdateOperationsInput | string
    resumoIA?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    googleEventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdvogadoUpdateWithoutProcessosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    oab?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    googleCalendarId?: NullableStringFieldUpdateOperationsInput | string | null
    googleAuth?: GoogleAuthUpdateOneWithoutAdvogadoNestedInput
    intimacoes?: IntimacaoUpdateManyWithoutAdvogadoNestedInput
  }

  export type AdvogadoUncheckedUpdateWithoutProcessosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    oab?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    googleCalendarId?: NullableStringFieldUpdateOperationsInput | string | null
    googleAuth?: GoogleAuthUncheckedUpdateOneWithoutAdvogadoNestedInput
    intimacoes?: IntimacaoUncheckedUpdateManyWithoutAdvogadoNestedInput
  }

  export type AdvogadoUncheckedUpdateManyWithoutProcessosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    oab?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    googleCalendarId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificacaoCreateManyIntimacaoInput = {
    id?: string
    tipo: string
    status: string
    dataEnvio?: Date | string | null
    tentativas?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificacaoUpdateWithoutIntimacaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dataEnvio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tentativas?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacaoUncheckedUpdateWithoutIntimacaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dataEnvio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tentativas?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacaoUncheckedUpdateManyWithoutIntimacaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dataEnvio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tentativas?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}