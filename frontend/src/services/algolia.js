import algoliasearch from 'algoliasearch';

const client = algoliasearch('OSJISXEYU4', '19c4f1982562c98799d5b525d0901c87');
const index = client.initIndex('pets');

export default index;