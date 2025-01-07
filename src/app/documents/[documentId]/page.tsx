interface DocumentIdPageProps {
    params: Promise<{documentId: string}>;
};

const DocumentIdPage = async({params} : DocumentIdPageProps) => {
    // const docID = await params;
    const awaitedParams = await params;
    const docID = awaitedParams.documentId;
    
    return ( 
        <div>
            Document ID Page : {docID}
        </div>
     );
}
 
export default DocumentIdPage;