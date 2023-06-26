import React from 'react';
import useTitle from '../../Hook/useTitle';

const Blogs = () => {
    
    useTitle('Blogs')

    return (
        <div className='mt-16 w-[1140px] mx-auto bg-base-200 p-7'>
            <div className=' border-red-400 border-2 p-7 rounded-md'>
                {/* question 1 */}
                <h1 className='text-center font-bold text-3xl mb-6'>
                    What is an access token and refresh token? How do they work and where should we store them on the client-side ?</h1>
                <p>

                    <b> 1. Access Token:  </b> <br />
                    - An access token is a credential that is used to authorize and access protected resources on an API server.
                    - It is typically a JSON Web Token (JWT) that contains encoded information about the user or client, along with an expiration time and other metadata.
                    - Access tokens are short-lived and have a relatively short expiration time, usually ranging from a few minutes to a few hours.
                    - They are used for authenticating and authorizing requests to access protected API endpoints. <br /> <br />

                    <b>2. Refresh Token: </b> <br />
                    - A refresh token is a credential that is used to obtain a new access token when the current access token expires.
                    - Unlike access tokens, refresh tokens are long-lived and have a longer expiration time, usually ranging from days to months.
                    - Refresh tokens are securely stored on the client-side and are sent to the server to obtain a new access token.
                    - They provide a way to maintain user sessions and avoid repeatedly prompting users to log in. <br /> <br />

                    <b>  How they work together: </b> <br />
                    - When a user logs in or authenticates, the server generates both an access token and a refresh token and sends them back as a response. <br />
                    - The access token is included in the Authorization header of subsequent API requests to authenticate and authorize the user.
                    - When the access token expires, the client sends the refresh token to the server to request a new access token.
                    - If the refresh token is valid and not expired, the server responds with a new access token.
                    - This process can be repeated until the refresh token itself expires or is revoked, at which point the user needs to authenticate again. <br />

                    Storing tokens on the client-side:
                    - Access tokens should be stored securely on the client-side, typically in memory or in a secure storage mechanism like browser cookies or the browser's Web Storage API (localStorage or sessionStorage). <br />
                    - Refresh tokens should be stored securely on the client-side as well, but in a more persistent storage mechanism, such as browser cookies with the "HttpOnly" flag set, or in secure storage solutions like secure HTTP-only cookies or encrypted local storage.
                    - Storing tokens securely helps prevent unauthorized access or tampering by malicious actors. <br />
                </p>
            </div>

            {/* Question - 2 */}

            <div className=' border-green-400 border-2 p-7 mt-7 rounded-md' >

                <h1 className='text-center font-bold text-3xl mb-6'>Compare SQL and NoSQL databases ? </h1>

                <p>

                    <b> SQL Databases: </b> <br /> <br />
                    1. Structure: SQL databases are based on a structured schema that defines the table structure, relationships, and constraints. <br />
                    2. Data Model: SQL databases use a relational data model with tables, rows, and columns to store and organize data. <br />
                    3. Query Language: SQL databases use the SQL language for querying and manipulating data, which provides a standardized way to interact with the database. <br />
                    4. ACID Compliance: SQL databases typically adhere to ACID (Atomicity, Consistency, Isolation, Durability) properties, ensuring data integrity and transactional consistency. <br />
                    5. Scalability: SQL databases generally offer vertical scalability, where scaling involves increasing the hardware resources of a single server. <br />
                    6. Schema Changes: SQL databases require predefined schemas, and any changes to the schema may involve migrating data and altering existing table structures. <br /> <br />

                    NoSQL Databases: <br />
                    1. Structure: NoSQL databases have a flexible schema or schema-less structure, allowing for dynamic and unstructured data. <br />
                    2. Data Model: NoSQL databases support various data models, including key-value pairs, document-based, columnar, and graph-based, allowing for more diverse data storage. <br />
                    3. Query Language: NoSQL databases may have their own query languages or provide APIs for data manipulation and retrieval, which can vary depending on the database type. <br />
                    4. ACID Compliance: NoSQL databases often relax some ACID properties to provide better scalability and performance. However, some NoSQL databases offer eventual consistency or provide mechanisms for eventual consistency. <br />
                    5. Scalability: NoSQL databases are designed to be highly scalable, both horizontally (by adding more servers/nodes) and vertically (by increasing hardware resources of individual servers). <br />
                    6. Schema Changes: NoSQL databases can handle schema changes more easily since they don't require predefined schemas. New data can be stored without changing the existing data structure. <br />

                    Choosing between SQL and NoSQL databases depends on various factors such as the nature of the data, scalability requirements, performance needs, and development flexibility. SQL databases are often suitable for structured data with complex relationships, while NoSQL databases excel in handling large amounts of unstructured or rapidly changing data with high scalability demands. It's important to carefully evaluate the specific requirements of your application before selecting the appropriate database type.
                </p>
            </div>

            {/* Question - 3 */}

            <div className=' border-gray-700 border-2 p-7 mt-7 rounded-md'>
                <h1 className='text-center font-bold text-3xl mb-6'>What is express js? What is Nest JS ?
                </h1>
                <p>
                    Express.js is a lightweight web application framework for Node.js, while NestJS is a powerful framework for building server-side applications using TypeScript. Express.js is known for its simplicity and flexibility, while NestJS provides a more structured and opinionated approach to application development. Both frameworks are popular choices for building web servers and APIs in the Node.js ecosystem.
                </p>
            </div>

            {/* Question - 4 */}

            <div className=' border-amber-400 border-2 p-7 mt-7 rounded-md'>
                <h1 className='text-center font-bold text-3xl mb-6'> What is MongoDB aggregate and how does it work ?
                </h1>

                <p>The MongoDB Aggregation framework is a data processing feature that allows you to perform advanced operations on collections. It works by creating a pipeline of stages that transform and analyze data. Each stage applies specific operations on the input documents and passes the results to the next stage. This allows you to filter, group, project, and perform various other operations to extract meaningful insights from your data. It's a powerful tool for data analysis and manipulation in MongoDB.</p>
            </div>
        </div>
    );
};

export default Blogs;