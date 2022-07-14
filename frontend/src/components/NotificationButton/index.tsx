import icon  from '../../assets/img/notificationicon.svg';

function NotificationButton() {
    return (
        <div className="dsmeta-red-btn">
            <img src={icon} alt="Notificar" />
        </div>
    );
}

export default NotificationButton;