import {
  ListItem,
  ListItemText,
  ListSubheader,
  Menu,
  MenuItem,
  IconButton,
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SettingIcon from "@material-ui/icons/Settings";
import LayersIcon from "@material-ui/icons/Layers";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

export const mainListItems = (
  <>
    <ListSubheader inset color="primary">
      <h3>MÓDULOS</h3>
    </ListSubheader>
    <ListItem>
      <PopupState variant="popper">
        {(popupState) => (
          <>
            <IconButton {...bindTrigger(popupState)} color="primary">
              <LayersIcon />
            </IconButton>
            <Menu {...bindMenu(popupState)}>
              <MenuItem onClick={popupState.close}>Usuários</MenuItem>
              <MenuItem onClick={popupState.close}>Grupos de Acesso</MenuItem>
              <MenuItem onClick={popupState.close}>Modulos de Acesso</MenuItem>
              <MenuItem onClick={popupState.close}>Telas do Sistema</MenuItem>
              <MenuItem onClick={popupState.close}>Dispositivos</MenuItem>
            </Menu>
          </>
        )}
      </PopupState>
      <ListItemText color=" primary" primary="Controle de Acesso" />
    </ListItem>
    <ListItem>
      <PopupState variant="popper">
        {(popupState) => (
          <>
            <IconButton {...bindTrigger(popupState)} color="primary">
              <ShoppingCartIcon />
            </IconButton>
            <Menu {...bindMenu(popupState)}>
              <MenuItem onClick={popupState.close}>
                Pedidos do Ecommerce
              </MenuItem>
              <MenuItem onClick={popupState.close}>
                Clientes do Ecommerce
              </MenuItem>
              <MenuItem onClick={popupState.close}>Produtos</MenuItem>
              <MenuItem onClick={popupState.close}>Fotos dos Produtos</MenuItem>
              <MenuItem onClick={popupState.close}>Seções de Produtos</MenuItem>
              <MenuItem onClick={popupState.close}>Produtos Similares</MenuItem>
              <MenuItem>Produtos Correlacionados</MenuItem>
              <MenuItem onClick={popupState.close}>Slides</MenuItem>
              <MenuItem onClick={popupState.close}>Marcas de Produtos</MenuItem>
              <MenuItem onClick={popupState.close}>
                Depoimentos de Clientes
              </MenuItem>
              <MenuItem onClick={popupState.close}>
                Paginas Informativas
              </MenuItem>
              <MenuItem onClick={popupState.close}>Artigos do Blog</MenuItem>
              <MenuItem onClick={popupState.close}>Cupons de Desconto</MenuItem>
              <MenuItem onClick={popupState.close}>Estoques</MenuItem>
              <MenuItem onClick={popupState.close}>Tabela de Preços</MenuItem>
              <MenuItem onClick={popupState.close}>Taxas De Cartão</MenuItem>
            </Menu>
          </>
        )}
      </PopupState>
      <ListItemText primary="Ecommerce" />
    </ListItem>
    <ListItem>
      <PopupState variant="popper">
        {(popupState) => (
          <>
            <IconButton {...bindTrigger(popupState)} color="primary">
              <SettingIcon />
            </IconButton>
            <Menu {...bindMenu(popupState)}>
              <MenuItem onClick={popupState.close}>Empresas</MenuItem>
              <MenuItem onClick={popupState.close}> Parâmetros</MenuItem>
            </Menu>
          </>
        )}
      </PopupState>
      <ListItemText primary="Configurações" />
    </ListItem>
  </>
);

// export const secondaryListItems = (
//   <div>
//     <ListSubheader inset>Relatórios</ListSubheader>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Mês atual" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Último quarto" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Final de ano" />
//     </ListItem>
//   </div>
// );
