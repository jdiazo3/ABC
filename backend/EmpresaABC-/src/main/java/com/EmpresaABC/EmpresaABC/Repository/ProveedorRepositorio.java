
package com.EmpresaABC.EmpresaABC.Repository;


import com.EmpresaABC.EmpresaABC.entity.Proveedor;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author juand
 */
@Repository
public interface ProveedorRepositorio extends CrudRepository<Proveedor ,Integer>{
    @Transactional(readOnly = true)
    Optional<Proveedor>findByNombre(String nombre);


    @Transactional(readOnly = true)
    @Query(
        value = "select * from Proveedor where proveedor.nombre LIKE %:filtro% OR Proveedor.apellido_pro LIKE %:filtro% ",
        nativeQuery = true
        )

        Optional<Proveedor>search(@Param("filtro")String filtro);


}

