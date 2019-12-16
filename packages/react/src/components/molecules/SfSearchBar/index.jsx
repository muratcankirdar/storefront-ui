import React from "react";
import classnames from 'classnames';
import { SfIcon } from "../../atoms";
import '@storefront-ui/shared/styles/components/SfSearchBar.scss';

export const SfSearchBar = ({ classname, placeholder, value, icon, clearIcon, onInputChange, onSearchClick }) => {
  const onKeyPressHandler = (event) => {
    if (event.key === 'Enter' && onSearchClick) {
      onSearchClick()
    }
  }

  return (
    <div className={classnames("sf-search-bar", classname)}>
      <input
        className="sf-search-bar__input"
        type="search"
        value={value}
        placeholder={placeholder}
        onChange={onInputChange}
        onKeyDown={onKeyPressHandler}
      />
      {icon && <svg onClick={onSearchClick} className="sf-search-bar__icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.6679 18.1085L16.0788 14.5457C18.8811 10.9579 18.5864 5.84813 15.3652 2.62884C13.6692 0.933843 11.4063 0 8.99786 0C6.5882 0 4.32646 0.933892 2.63049 2.62884C0.934428 4.32384 0 6.58526 0 8.99222C0 11.4004 0.934477 13.6607 2.63049 15.3556C4.32656 17.0506 6.58938 17.9844 8.99786 17.9844C10.9897 17.9844 12.9568 17.3212 14.5298 16.0677L18.0948 19.6804C18.3157 19.9011 18.5865 20 18.8814 20C19.1762 20 19.4471 19.8771 19.6679 19.6804C20.1107 19.2629 20.1107 18.5507 19.6679 18.1082L19.6679 18.1085ZM15.784 8.99222C15.784 10.8101 15.0714 12.5061 13.7921 13.7836C12.5138 15.061 10.7928 15.7742 8.99779 15.7742C7.20274 15.7742 5.4817 15.062 4.20345 13.7836C2.92516 12.5061 2.21157 10.7861 2.21157 8.99222C2.21157 7.17437 2.92418 5.47833 4.20345 4.20089C5.48174 2.9234 7.20274 2.21025 8.99779 2.21025C10.8168 2.21025 12.5139 2.92242 13.7921 4.20089C15.0704 5.47934 15.784 7.17447 15.784 8.99222Z" fill="#1D1F22"/>
      </svg>}
      <span className="sf-search-bar__clear-icon">
        {!clearIcon && <svg width="8" height="8" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.775 0.224988C19.475 -0.0749961 18.989 -0.0749961 18.6891 0.224988L10 8.91407L1.31092 0.224988C1.01094 -0.0749961 0.524953 -0.0749961 0.224988 0.224988C-0.0749769 0.524972 -0.0749961 1.01096 0.224988 1.31092L8.91407 10L0.224988 18.6891C-0.0749961 18.9891 -0.0749961 19.475 0.224988 19.775C0.524972 20.075 1.01096 20.075 1.31092 19.775L10 11.0859L18.6891 19.775C18.9891 20.075 19.475 20.075 19.775 19.775C20.075 19.475 20.075 18.989 19.775 18.6891L11.0859 10L19.775 1.31092C20.075 1.01094 20.075 0.524953 19.775 0.224988Z" fill="#1D1F22"/>
        </svg>}
        {clearIcon && <SfIcon><img src={clearIcon}/></SfIcon>}
      </span>
    </div>
  );
};

SfSearchBar.defaultProps = {
  placeholder: "Search for...",
  value: "",
  icon: true
}