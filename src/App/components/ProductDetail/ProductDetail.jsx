import React from 'react';
import ProductsDetail from '../../objects/ProductsDetail';

const chooseProduct = (id) => {
  const idSplit = id.split('/');
  return idSplit[2];
};

const ProductDetail = () => {
  const id = window.location.pathname;

  return (
    <div>
      {ProductsDetail.map((chosenProduct) => (chosenProduct.id === chooseProduct(id) ? (
        <div>
          {/* <h1>patata</h1>

              <h1 id={id}>{chosenProduct.name}</h1> */}

          <h1>{chosenProduct.name}</h1>

          <button type="button">Añadir al carrito</button>

          <p>{chosenProduct.description}</p>

          <ul className="phone-thumbs">
            <li>
              {/* <!-- <img ng-src="{img}" ng-click="$ctrl.setImage(img)" /> --> */}
            </li>
          </ul>

          <ul className="specs">
            <li>
              <span>Availability and Networks</span>
              <dl>
                <dt>Availability</dt>
                <dd>{chosenProduct.availability}</dd>
              </dl>
            </li>
            <li>
              <span>Battery</span>
              <dl>
                <dt>Type</dt>
                <dd>{chosenProduct.battery.type}</dd>
                <dt>Talk Time</dt>
                <dd>{chosenProduct.battery.talkTime}</dd>
                <dt>Standby time (max)</dt>
                <dd>{chosenProduct.battery.standbyTime}</dd>
              </dl>
            </li>
            <li>
              <span>Storage and Memory</span>
              <dl>
                <dt>RAM</dt>
                <dd>{chosenProduct.storage.ram}</dd>
                <dt>Internal Storage</dt>
                <dd>{chosenProduct.storage.flash}</dd>
              </dl>
            </li>
            <li>
              <span>Connectivity</span>
              <dl>
                <dt>Network Support</dt>
                <dd>{chosenProduct.connectivity.cell}</dd>
                <dt>WiFi</dt>
                <dd>{chosenProduct.connectivity.wifi}</dd>
                <dt>Bluetooth</dt>
                <dd>
                  {chosenProduct.connectivity.bluetooth}
                </dd>
                <dt>Infrared</dt>
                <dd>
                  {chosenProduct.connectivity.infrared}
                </dd>
                <dt>GPS</dt>
                <dd>{chosenProduct.connectivity.gps}</dd>
              </dl>
            </li>
            <li>
              <span>Android</span>
              <dl>
                <dt>OS Version</dt>
                <dd>{chosenProduct.android.os}</dd>
                <dt>UI</dt>
                <dd>{chosenProduct.android.ui}</dd>
              </dl>
            </li>
            <li>
              <span>Size and Weight</span>
              <dl>
                <dt>Dimensions</dt>
                <dd>{chosenProduct.dim}</dd>
                <dt>Weight</dt>
                <dd>
                  {chosenProduct.sizeAndWeight.weight}
                </dd>
              </dl>
            </li>
            <li>
              <span>Display</span>
              <dl>
                <dt>Screen size</dt>
                <dd>{chosenProduct.display.screenSize}</dd>
                <dt>Screen resolution</dt>
                <dd>
                  {chosenProduct.display.screenResolution}
                </dd>
                <dt>Touch screen</dt>
                <dd>{chosenProduct.display.touchScreen}</dd>
              </dl>
            </li>
            <li>
              <span>Hardware</span>
              <dl>
                <dt>CPU</dt>
                <dd>{chosenProduct.hardware.cpu}</dd>
                <dt>USB</dt>
                <dd>{chosenProduct.hardware.usb}</dd>
                <dt>Audio / headphone jack</dt>
                <dd>{chosenProduct.hardware.audioJack}</dd>
                <dt>FM Radio</dt>
                <dd>{chosenProduct.hardware.fmRadio}</dd>
                <dt>Accelerometer</dt>
                <dd>
                  {chosenProduct.hardware.accelerometer}
                </dd>
              </dl>
            </li>
            <li>
              <span>Camera</span>
              <dl>
                <dt>Primary</dt>
                <dd>{chosenProduct.camera.primary}</dd>
                <dt>Features</dt>
                <dd>
                  {chosenProduct.camera.features.join(
                    ', ',
                  )}
                </dd>
              </dl>
            </li>
            <li>
              <span>Additional Features</span>
              <dd>{chosenProduct.additionalFeatures}</dd>
            </li>
          </ul>
        </div>
      ) : (
        ''
      )))}
      ;
    </div>
  );
};

// ProductDetail.propTypes = {
//   idProduct: PropTypes.string,
// };
// ProductDetail.defaultProps = {
//   idProduct: '',
// };

export default ProductDetail;
