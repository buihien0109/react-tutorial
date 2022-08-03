import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useRef } from "react";

function PostFiltersForm(props) {
    const { onSubmit } = props;
    const [searchTerm, setSearchTerm] = useState("");
    const typingTimeoutRef = useRef(null);

    const handleSearchTermChange = (e) => {
        setSearchTerm(e.target.value);

        if (!onSubmit) return;

        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }

        typingTimeoutRef.current = setTimeout(() => {
            const formValues = {
                searchTerm: e.target.value,
            };
            onSubmit(formValues);
        }, 1000);
    };

    return (
        <form>
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearchTermChange}
            />
        </form>
    );
}

PostFiltersForm.propTypes = {
    onSubmit: PropTypes.func,
};

PostFiltersForm.defaultProps = {
    onSubmit: null,
};

export default PostFiltersForm;
