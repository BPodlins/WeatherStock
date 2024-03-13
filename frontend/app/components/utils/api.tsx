const fetchWithCredentials = async (url, options = {}, serverSideHeaders = {}) => {
    const headers = {
        'Content-Type': 'application/json',
        ...serverSideHeaders, // Includes cookies when called server-side
    };

    try {
        const response = await fetch(url, { ...options, headers, credentials: 'include' });
        if (!response.ok) throw new Error('Network response was not OK');
        return await response.json();
    } catch (error) {
        console.error('Fetch Error:', error);
        throw error;
    }
};